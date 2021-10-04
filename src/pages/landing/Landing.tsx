import { Fragment } from "react";

import style from "./Landing.module.scss";

import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";
import CallToActionButton from "./components/call-to-action/CallToActionButton";
import Featured from "./components/featured/Featured";

const Landing = () => {
	return (
		<Fragment>
			<div className={style.landing}>
				<div className={style.cta}>
					<h1>Cùng Uniify kiến tạo tương lai</h1>
					<p>
						Khám phá và tìm hiểu thông tin, đăng ký xét tuyển tại
						những trường Đại học yêu thích của mình. Hãy bắt đầu
						ngay bây giờ!
					</p>
					<CallToActionButton />
				</div>
				<div className={style.illustration}>
					<EducationSVG />
				</div>
			</div>
			<Featured />
		</Fragment>
	);
};

export default Landing;
