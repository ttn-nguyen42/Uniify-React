import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";
import { DashboardContentProps } from "../../../../util/types/Interface";
import DashboardCertificates from "../certificates/DashboardCertificates";
import DashboardFavorite from "../favorite/DashboardFavorite";
import DashboardPersonalInfo from "../personal_info/DashboardPersonalInfo";

import style from "./DashboardContent.module.scss";

const DashboardContent: FC<DashboardContentProps> = (props) => {
	const { info } = props;
	const dashboardState = useSelector(
		(state: RootState) => state.dashboardState.selectedFunctionality
	);
	return (
		<div className={style.content}>
			{dashboardState === "favorite" && <DashboardFavorite info={info} />}
			{dashboardState === "personal" && (
				<DashboardPersonalInfo info={info} />
            )}
            {dashboardState === "certificates" && <DashboardCertificates info={info}/>}
		</div>
	);
};

export default DashboardContent;
