import { FC } from "react";
import { DashboardContentProps } from "../../../../util/types/Interface";

import style from "./DashboardPersonalInfo.module.scss";

import { Link } from "react-router-dom";

const DashboardPersonalInfo: FC<DashboardContentProps> = (props) => {
	return (
		<div className={style.personal}>
			<p>Bạn có thể xem và thay đổi thông tin cá nhân của mình dưới đây</p>
			<Link to="/dashboard/personal-info">
				Thay đổi thông tin cá nhân
			</Link>
		</div>
	);
};

export default DashboardPersonalInfo;
