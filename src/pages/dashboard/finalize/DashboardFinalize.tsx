import { FC } from "react";
import Button from "react-bootstrap/Button";
import { FinalizeFormProps } from "../../../util/types/Interface";

import style from "./DashboardFinalize.module.scss";

const DashboardFinalize: FC<FinalizeFormProps> = (props) => {
	const { signOutAction } = props;
	return (
		<section className={style.finalize}>
			<div>Finalize</div>
			<Button variant="outline-dark" onClick={signOutAction}>
				Đăng xuất
			</Button>
		</section>
	);
};

export default DashboardFinalize;
