import Subheader from "../../../../components/header/subheader/Subheader";
import style from "./AdmissionMethod.module.scss";

import {
    faEdit,
    faEnvelopeOpenText,
    faScroll,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import ListTile from "../../../../components/list_tile/ListTile";
import { FC } from "react";
import { SchoolAdmissionProps } from "../../../../util/types/Interface";

const AdmissionMethod: FC<SchoolAdmissionProps> = (props) => {
    const { admission } = props;
    return (
        <section>
            <hr className={style.hr} />
            <Subheader
                heading="Phương thức tuyển sinh"
                desc="Các phương thức tuyển sinh của trường"
            />
            <ul>
                <li>
                    <ListTile
                        icon={faEdit}
                        heading="Theo điểm thi THPTQG"
                        info={admission.thptqg}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faEnvelopeOpenText}
                        heading="Theo bài thi Đánh giá năng lực"
                        info={admission.dgnl}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faScroll}
                        heading="Theo xét tuyển hồ sơ học tập"
                        info={admission.xths}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faBars}
                        heading="Phương thức khác"
                        info={admission.otherMethod}
                    />
                </li>
            </ul>
            <hr className={style.hr} />
        </section>
    );
};

export default AdmissionMethod;
