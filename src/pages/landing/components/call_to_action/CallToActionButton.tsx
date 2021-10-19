import style from "./CallToActionButton.module.scss";

import Button from "react-bootstrap/Button";

import { useHistory } from "react-router";

const CallToActionButton = () => {
	const history = useHistory();
	const toExplore = () => {
		history.push("/explore");
	};
	const toAbout = () => {
		history.push("/about");
	};
	return (
		<div className={style.cta}>
			<Button
				variant="warning"
				size="lg"
				className={style.button}
				onClick={toExplore}
			>
				Khám phá ngay
			</Button>
			<Button
				variant="outline-warning"
				size="lg"
				className={style.button2}
				onClick={toAbout}
			>
				Tìm hiểu thêm về Uniify
			</Button>
		</div>
	);
};

export default CallToActionButton;
