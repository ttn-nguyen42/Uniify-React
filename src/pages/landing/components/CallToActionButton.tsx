import style from "./CallToActionButton.module.scss";

import Button from "react-bootstrap/Button";

const CallToActionButton = () => {
	return <div className={style.cta}>
        <Button variant="warning" size="lg" className={style.button}>Khám phá ngay</Button>
        <Button variant="outline-warning" size="lg">Tìm hiểu thêm về Uniify</Button>
    </div>;
};

export default CallToActionButton;
