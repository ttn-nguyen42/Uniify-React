import style from "./DatabaseAdmin.module.scss";

import HeaderText from "../components/header/header_text/HeaderText";
import AdminForm from "./form/AdminForm";

import Alert from "react-bootstrap/Alert";

const DatabaseAdmin = () => {
    return (
        <section className={style.admin}>
            <HeaderText
                className={style.header}
                heading="Trang quản lý cơ sở dữ liệu"
                desc="Sử dụng REST API và Firebase Realtime Database"
            />
            <Alert variant="danger">
                Hệ thống sử dụng REST API cùng với Firestore Realtime (noSQL),
                yêu cầu tất cả field phải được điền đầy đủ, không nên để trống
            </Alert>
            <AdminForm />
        </section>
    );
};

export default DatabaseAdmin;
