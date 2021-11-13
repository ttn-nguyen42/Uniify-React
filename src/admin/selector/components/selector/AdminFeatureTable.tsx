import style from "./AdminFeatureTable.module.scss";

import { useEffect, useState } from "react";
import { ShortPreviewSchema } from "../../../../util/schema/DatabaseSchema";

import { collection, getDocs } from "firebase/firestore";
import { FirestoreApp } from "../../../../util/api/Firebase";

import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import TabularComponent from "./components/SelectorTabularComponent";
import ErrorPage from "../../../../pages/error_page/ErrorPage";

const AdminFeatureTable = () => {
    const [data, updateData] = useState<ShortPreviewSchema[]>();

    const [errorOccurred, updateError] = useState<boolean>(false);
    const [isLoading, updateLoadingState] = useState<boolean>(true);

    // Fetch all previewdata
    useEffect(() => {
        const getPreviewData = async () => {
            try {
                let queryResultList: ShortPreviewSchema[] = [];
                const queryResult = await getDocs(
                    collection(FirestoreApp, "previewdata")
                );
                queryResult.forEach((doc: any) => {
                    queryResultList.push(doc.data());
                });
                updateData(queryResultList);
                updateLoadingState(false);
            } catch (error) {
                updateError(true);
                alert("Đã có lỗi xảy ra, vui lòng thử lại");
            }
        };
        getPreviewData();
    }, []);

    let tableRows: any = [];

    if (data !== undefined) {
        tableRows = data.map((selection: ShortPreviewSchema) => {
            return <TabularComponent info={selection} />;
        });
    }

    return (
        <div className={style.table}>
            {errorOccurred && <ErrorPage />}
            {isLoading && !errorOccurred && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />
                </div>
            )}
            {!isLoading && !errorOccurred && (
                <div className={style.content}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên trường</th>
                                <th>Địa điểm</th>
                                <th className={style.center}>Chọn trường</th>
                            </tr>
                        </thead>
                        <tbody>{tableRows}</tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default AdminFeatureTable;
