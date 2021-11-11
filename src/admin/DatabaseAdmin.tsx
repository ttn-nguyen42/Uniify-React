import style from "./DatabaseAdmin.module.scss";

import HeaderText from "../components/header/header_text/HeaderText";
import AdminForm from "./form/AdminForm";
import Spinner from "react-bootstrap/Spinner";

import Alert from "react-bootstrap/Alert";
import {
    SchoolSchema,
    ShortPreviewSchema,
} from "../util/schema/DatabaseSchema";

import { collection, addDoc } from "firebase/firestore";
import { FirestoreApp } from "../util/api/Firebase";

import { useState } from "react";

const DatabaseAdmin = () => {
    const [isLoading, updateLoadingStatus] = useState<boolean>(false);
    const [errorOccurred, updateError] = useState<boolean | undefined>(
        undefined
    );

    const handleRequest = async (data: SchoolSchema) => {
        // Create write request to Firebase
        /*
         * Upload to explore first then retrieve documentId and create small intro
         */

        updateLoadingStatus(true);
        try {
            const exploreRef = await addDoc(
                collection(FirestoreApp, "schooldata"),
                data
            );
            const documentId = exploreRef.id;

            const previewTransformedData: ShortPreviewSchema = {
                schoolName: data.header.schoolName,
                englishName: data.header.englishName,
                shortLocation: data.shortLocation,
                locationCity: data.locationCity,
                averageRating: data.header.averageRating,
                numberOfRating: data.header.numberOfRating,
                category: data.category,
                previewImage: data.gallery.sideImage1,
                id: documentId,
            };

            const introRef = await addDoc(
                collection(FirestoreApp, "previewdata"),
                previewTransformedData
            );
            console.log("THÀNH CÔNG. MÃ DỮ LIỆU: " + introRef.id);
            updateError(false);
        } catch (error) {
            console.log(error);
            updateError(true);
            alert(
                "Đã có lỗi xảy ra, nhập dữ liệu không thành công \n Lỗi: " +
                    error
            );
        }
        updateLoadingStatus(false);
    };

    return (
        <section className={style.admin}>
            {isLoading && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />
                </div>
            )}
            {!isLoading && (
                <div>
                    {errorOccurred === true && (
                        <Alert variant="danger">
                            Nhập dữ liệu không thành công, vui lòng thử lại
                        </Alert>
                    )}
                    {errorOccurred === false && (
                        <Alert variant="success">
                            Nhập dữ liệu thành công!
                        </Alert>
                    )}
                    <HeaderText
                        className={style.header}
                        heading="Trang quản lý cơ sở dữ liệu"
                        desc="Sử dụng REST API và Firebase Realtime Database"
                    />
                    <Alert variant="danger">
                        Hệ thống sử dụng REST API cùng với Firestore Realtime
                        (noSQL), yêu cầu tất cả field phải được điền đầy đủ,
                        không nên để trống
                    </Alert>
                    <AdminForm handleRequest={handleRequest} />
                </div>
            )}
        </section>
    );
};

export default DatabaseAdmin;
