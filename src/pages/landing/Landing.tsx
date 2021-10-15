import { Fragment } from "react";

import style from "./Landing.module.scss";

import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";
import CallToActionButton from "./components/call-to-action/CallToActionButton";
import Featured from "./components/featured/Featured";
import Categories from "./components/categories/Categories";

import { CategoryType } from "../../util/types/Type";

const dummyListSchool = [
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

const dummyListCategories: CategoryType[] = [
	{
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kỹ thuật - Công nghệ",
		description:
			"Cung cấp các giải pháp công nghệ, kỹ thuật cao cho xã hội,...",
		id: "ktcn",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
	},
    {
		category: "Kinh tế - Tài chính",
		description:
			"Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
		id: "kttc",
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
					itemList: dummyListSchool,
				}}
			/>
			<Featured
				type={{
					heading: "Xem nhiều nhất",
					subheading:
						"Các trường được người dùng quan tâm nhiều nhất trên Uniify",
					badge: {
						enable: true,
						content: "Nổi bật",
						variant: "info",
					},
					itemList: dummyListSchool,
				}}
			/>
			<Featured
				type={{
					heading: "Đánh giá cao nhất",
					subheading:
						"Các trường được nhận được đánh giá cao nhất trong tháng",
					badge: {
						enable: true,
						content: "Đánh giá cao",
						variant: "success",
					},
					itemList: dummyListSchool,
				}}
			/>
			<Categories
				heading="Theo khối ngành"
				description="Tìm hiểu và chọn trường theo khối ngành"
				list={dummyListCategories}
			/>
		</Fragment>
	);
};

export default Landing;
