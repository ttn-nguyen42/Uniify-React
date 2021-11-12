import style from "./AdminFeatureSelector.module.scss";

import AdminFeatureNavbar from "./components/navbar/AdminFeatureNavbar";
import HeaderText from "../../components/header/header_text/HeaderText";
import Subheader from "../../components/header/subheader/Subheader";
import AdminFeatureTable from "./components/selector/AdminFeatureTable";
import AdminFeatureSelectionList from "./components/list/AdminFeatureSelectionList";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../util/state/store/globalStore";
import { resetCurrentSelection } from "../../util/state/slice/adminStateSlice";

import { doc, updateDoc } from "firebase/firestore";
import { FirestoreApp } from "../../util/api/Firebase";
import { useState, Fragment } from "react";

const AdminFeatureSelector = () => {
    const currentFeature = useSelector(
        (state: RootState) => state.adminState.feature
    );

    const currentSelection = useSelector((state: RootState) => {
        if (currentFeature === "featured")
            return state.adminState.currentSelectionFeatured;
        if (currentFeature === "for-you")
            return state.adminState.currentSelectionForYou;
        if (currentFeature === "international")
            return state.adminState.currentSelectionInternational;
        if (currentFeature === "associate")
            return state.adminState.currentSelectionAssociate;
    });

    const dispatch = useDispatch();

    const [isLoading, updateLoadingState] = useState<boolean>(false);
    const [errorOccurred, updateError] = useState<boolean>();

    const buttonDisableState =
        currentSelection === undefined || currentSelection.length === 0;

    const onSubmission = async () => {
        updateLoadingState(true);
        try {
            let documentRef = doc(FirestoreApp, "featuredata/featurelist");
            await updateDoc(documentRef, {
                [currentFeature]: currentSelection,
            });
            dispatch(resetCurrentSelection({ type: currentFeature }));
            updateError(false);
        } catch (error) {
            updateError(true);
            alert("Đã có lỗi xảy ra, vui lòng thử lại");
        }
        updateLoadingState(false);
    };

    return (
        <Fragment>
            {isLoading && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />
                </div>
            )}
            {!isLoading && (
                <div className={style.selector}>
                    {errorOccurred === false && (
                        <Alert variant="success">
                            Đã nhập dữ liệu thành công!
                        </Alert>
                    )}
                    {errorOccurred && (
                        <Alert variant="danger">
                            Đã có lỗi xảy ra, vui lòng thử lại
                        </Alert>
                    )}
                    <HeaderText
                        heading="Trang quản lý các chức năng"
                        desc="Sử dụng REST API và Firebase Realtime Database"
                        className={style["header-margin"]}
                    />
                    <AdminFeatureNavbar />
                    <Subheader
                        heading="Danh sách các trường"
                        desc="Chọn các trường bằng cách bấm vào nút Chọn trường"
                        className={style.subheader}
                    />
                    <div className={style.flex}>
                        <AdminFeatureTable />
                        <AdminFeatureSelectionList />
                    </div>
                    <Button
                        variant="success"
                        onClick={onSubmission}
                        disabled={buttonDisableState}
                    >
                        Nhập lên cơ sở dữ liệu
                    </Button>
                </div>
            )}
        </Fragment>
    );
};

export default AdminFeatureSelector;
