import style from "./DatabaseAdmin.module.scss";

import HeaderText from "../components/header/header_text/HeaderText";
import Subheader from "../components/header/subheader/Subheader";

import Alert from "react-bootstrap/Alert";

const DatabaseAdmin = () => {
    return <section className={style.admin}>
        <HeaderText className={style.header} heading="Trang quản lý cơ sở dữ liệu" desc="Sử dụng REST API và Firebase Realtime Database" />
        <Alert variant="danger">
            Hệ thống sử dụng REST API cùng với Firestore Realtime (noSQL), yêu cầu tất cả field phải được điền đầy đủ, ảnh được lưu trữ trên Cloud Storage
        </Alert>
        <Subheader heading="Nhập dữ liệu" desc="Nhập dữ liệu về trường tại đây" />

    </section>
}

export default DatabaseAdmin;