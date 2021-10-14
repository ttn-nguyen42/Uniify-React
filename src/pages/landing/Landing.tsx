import { Fragment } from "react";

import style from "./Landing.module.scss";

import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";
import CallToActionButton from "./components/call-to-action/CallToActionButton";
import Featured from "./components/featured/Featured";

const dummyList = [
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		imageUrl: "https://via.placeholder.com/500",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		imageUrl: "https://via.placeholder.com/500",
		id: "bhbwrhbeber",
	},
];

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
			<Featured
				type={{
					heading: "Được giới thiệu",
					subheading: "Các trường được Uniify giới thiệu",
					badge: {
						enable: true,
						content: "Quảng cáo",
						variant: "warning",
					},
					itemList: dummyList,
				}}
			/>
		</Fragment>
	);
};

export default Landing;
