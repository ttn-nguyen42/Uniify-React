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
            alert("???? c?? l???i x???y ra, vui l??ng th??? l???i");
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
                            ???? nh???p d??? li???u th??nh c??ng!
                        </Alert>
                    )}
                    {errorOccurred && (
                        <Alert variant="danger">
                            ???? c?? l???i x???y ra, vui l??ng th??? l???i
                        </Alert>
                    )}
                    <HeaderText
                        heading="Trang qu???n l?? c??c ch???c n??ng"
                        desc="S??? d???ng REST API v?? Firebase Realtime Database"
                        className={style["header-margin"]}
                    />
                    <AdminFeatureNavbar />
                    <Subheader
                        heading="Danh s??ch c??c tr?????ng"
                        desc="Ch???n c??c tr?????ng b???ng c??ch b???m v??o n??t Ch???n tr?????ng"
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
                        Nh???p l??n c?? s??? d??? li???u
                    </Button>
                </div>
            )}
        </Fragment>
    );
};

export default AdminFeatureSelector;
