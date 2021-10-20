import style from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.info}>
                <div className={style["footer-title"]}>UNIIFY</div>
                <div className={style.social}>
                    <span>Khám phá Uniify trên</span>
                    <div className={style.brands}>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </div>
                </div>
            </div>
            <div className={style.rights}>
                <div>
                    <span>Được công nhận bởi Bộ Giáo dục</span>
                    <span>Được cấp phép bởi Bộ Công thương</span>
                    <span>Số giấy phép: 08/GDDNCT ngày 16/10/2021</span>
                </div>
                <div>
                    <span>
                        Phát triển bởi <b>5NN</b>
                    </span>
                    <span>
                        Địa chỉ: Trường Đại học Bách khoa TP.HCM - 268 Lý Thường
                        Kiệt, Q.10, TP.HCM
                    </span>
                    <span>Điện thoại: 0522985692</span>
                </div>
                <div>
                    <span>
                        © 2021. Toàn bộ bản quyền thuộc về <b>5NN</b> và các
                        trường thành viên
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
