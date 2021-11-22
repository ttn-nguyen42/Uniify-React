import style from "./DashboardBody.module.scss";

import { DashboardBodyProps } from "../../../../util/types/Interface";
import { FC } from "react";
import DashboardNavbar from "../navbar/DashboardNavbar";
import DashboardContent from "../content/DashboardContent";

const DashboardBody: FC<DashboardBodyProps> = (props) => {
	return (
		<section className={style.body}>
			<DashboardNavbar />
			<DashboardContent info={props} />
		</section>
	);
};

export default DashboardBody;
