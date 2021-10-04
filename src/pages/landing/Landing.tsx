import style from "./Landing.module.scss";
import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";

const Landing = () => {
	return (
		<div className={style.landing}>
			<div className={style.cta}>
				Khám phá, tìm hiểu trường Đại học phù hợp cho mình
			</div>
			<div className={style.illustration}>
				<EducationSVG />
			</div>
		</div>
	);
};

export default Landing;
