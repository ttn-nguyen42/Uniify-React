import Subheader from "../../../../components/header/subheader/Subheader";
import style from "./AdmissionMethod.module.scss";

import {
    faEdit,
    faEnvelopeOpenText,
    faScroll,
    faBars
} from "@fortawesome/free-solid-svg-icons";

import ListTile from "../../../../components/list_tile/ListTile";

const AdmissionMethod = () => {
    return <section>
        <hr className={style.hr} />
        <Subheader heading="Phương thức tuyển sinh" desc="Các phương thức tuyển sinh của trường" />
        <ul>
            <li>
                <ListTile
                    icon={faEdit}
                    heading="Theo điểm thi THPTQG"
                    info={["A00", "A01", "A02", "B00"]}
                />
            </li>
            <li>
                <ListTile
                    icon={faEnvelopeOpenText}
                    heading="Theo bài thi Đánh giá năng lực"
                    info={[
                        "ĐGNL của Đại học Quốc gia TP.HCM"
                    ]}
                />
            </li>
            <li>
                <ListTile
                    icon={faScroll}
                    heading="Theo xét tuyển hồ sơ học tập"
                    info={[
                        "ƯTXT của Đại học Quốc gia TP.HCM"
                    ]}
                />
            </li>
            <li>
                <ListTile
                    icon={faBars}
                    heading="Phương thức khác"
                    info={["Không"]}
                />
            </li>
        </ul>
        <hr className={style.hr} />
    </section>
}

export default AdmissionMethod;