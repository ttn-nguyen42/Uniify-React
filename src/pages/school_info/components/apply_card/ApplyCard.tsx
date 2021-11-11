import style from "./ApplyCard.module.scss";

import Button from "react-bootstrap/Button";
import Bullet from "../../../../components/header/bullets/Bullet";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplyCard = () => {
    return (
        <div className={style.apply}>
            <div className={`${style.floating} ${"border"}`}>
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg" className="py-3">
                        Nộp hồ sơ ngay
                    </Button>
                    <div className={style.favorite}>
                        <div className={style.fav}>
                            <Button
                                variant="outline-danger"
                                size="lg"
                                className={`py-3 ${style["full-width"]}`}
                            >
                                <FontAwesomeIcon icon={faHeart} size="1x" />
                            </Button>
                        </div>
                        <div className={`${style.cont} ps-2`}>
                            <Button
                                variant="outline-dark"
                                size="lg"
                                className={`py-3 ${style["full-width"]}`}
                            >
                                Liên hệ ngay
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={style.details}>
                    <h3>Ban tuyển sinh</h3>
                    <Bullet heading="Mã trường" content={["QSB"]} />
                    <Bullet
                        heading="Địa chỉ"
                        content={[
                            "268 Lý Thường Kiệt, Q.10, TP.HCM",
                            "Khu đô thị Đại học Quốc gia TP.HCM, Dĩ An, Bình Dương",
                        ]}
                    />
                    <Bullet
                        heading="Email"
                        content={["admission@hcmut.edu.vn"]}
                    />

                    <Bullet
                        heading="Số điện thoại"
                        content={["(02) 838 654 087"]}
                    />
                    <Bullet heading="Website" content={["aao.hcmut.edu.vn"]} />
                </div>
            </div>
        </div>
    );
};

export default ApplyCard;
