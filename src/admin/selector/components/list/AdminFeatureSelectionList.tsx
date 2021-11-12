import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";

import Table from "react-bootstrap/Table";

import ListTabularComponent from "./components/ListTabularComponent";
import { ShortPreviewSchema } from "../../../../util/schema/DatabaseSchema";

import { useEffect } from "react";
import { FirestoreApp } from "../../../../util/api/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { setCurrentSelection } from "../../../../util/state/slice/adminStateSlice";

import style from "./AdminFeatureSelectionList.module.scss";

const AdminFeatureSelectionList = () => {
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

    useEffect(() => {
        const fetchCurrentList = async () => {
            try {
                const documentReference = doc(
                    FirestoreApp,
                    "featuredata",
                    "featurelist"
                );
                const queryResult = await getDoc(documentReference);
                if (queryResult.exists()) {
                    const result = queryResult.data();
                    for (const [key, value] of Object.entries(result)) {
                        // Dispatch to Redux
                        dispatch(
                            setCurrentSelection({
                                type: key,
                                payload: value,
                            })
                        );
                    }
                }
            } catch (error) {
                alert("Đã có lỗi truy xuất dữ liệu xảy ra, vui lòng thử lại");
            }
        };
        fetchCurrentList();
    }, [currentFeature, dispatch]);

    let tableRows: any = [];

    if (currentSelection !== undefined) {
        tableRows = currentSelection.map((selection: ShortPreviewSchema) => {
            return (
                <ListTabularComponent
                    info={selection}
                    feature={currentFeature}
                />
            );
        });
    }

    return (
        <div className={style.selection}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên trường</th>
                        <th className={style.center}>Xoá trường</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </Table>
        </div>
    );
};

export default AdminFeatureSelectionList;
