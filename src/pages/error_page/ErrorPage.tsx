import style from "./ErrorPage.module.scss";

const ErrorPage = () => {
    return (
        <div className={style.error}>
            <h1>Lỗi 404! Trang bạn cần tìm không tồn tại</h1>
        </div>
    );
};

export default ErrorPage;
