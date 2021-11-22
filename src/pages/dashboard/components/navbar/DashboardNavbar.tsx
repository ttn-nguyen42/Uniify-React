import style from "./DashboardNavbar.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";
import { updateSelectedFunctionality } from "../../../../util/state/slice/dashboardSlice";
import Nav from "react-bootstrap/Nav";

const DashboardNavbar = () => {
	const dashboardState = useSelector(
		(state: RootState) => state.dashboardState.selectedFunctionality
	);
	const dispatch = useDispatch();

	const onSelectCategory = (event: string | null) => {
		if (event !== null) {
			dispatch(updateSelectedFunctionality(event));
		}
	};

	return (
		<div className={style.navbar}>
			<Nav
				variant="pills"
				className="flex-column"
				onSelect={onSelectCategory}
				activeKey={dashboardState}
			>
				<Nav.Item>
					<Nav.Link eventKey="favorite">Yêu thích</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="personal">Cá nhân</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="certificates">Chứng chỉ</Nav.Link>
                </Nav.Item>
			</Nav>
		</div>
	);
};

export default DashboardNavbar;
