import style from "./DashboardCertificates.module.scss";

import { DashboardContentProps } from "../../../../util/types/Interface";
import { FC } from "react";

const DashboardCertificates: FC<DashboardContentProps> = (props) => {
    const { info } = props;
    return <div className={style.certificates}></div>
}

export default DashboardCertificates;