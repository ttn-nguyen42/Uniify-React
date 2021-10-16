import { Fragment } from "react";

import style from "./Landing.module.scss";

import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";
import CallToActionButton from "./components/call-to-action/CallToActionButton";
import Featured from "./components/featured/Featured";
import Categories from "./components/categories/Categories";
import QuickNews from "./components/news/QuickNews";

import { CategoryType, QuickNewsCardType } from "../../util/types/Type";

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

const dummyNews: QuickNewsCardType[] = [
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T11:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022 Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
	{
		title: "Kỳ thi tuyển sinh Đại học năm 2022",
		provider: "VnExpress",
		imageUrl:
			"https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
		url: "dummy",
		timestamp: new Date("2021-10-15T10:13:10Z"),
	},
];

const Landing = () => {
	return (
		<Fragment>
			<section className={style.marg}>
				<div className={style.landing}>
					<div className={style.cta}>
						<h1>Cùng Uniify kiến tạo tương lai</h1>
						<p>
							Khám phá và tìm hiểu thông tin, đăng ký xét tuyển
							tại những trường Đại học yêu thích của mình. Hãy bắt
							đầu ngay bây giờ!
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
				<QuickNews
					interface={{
						heading: "Tin tức mới",
						description:
							"Tìm hiểu những tin tức mới nhất liên quan đến tuyển sinh Đại học",
						news: dummyNews,
					}}
				/>
			</section>
		</Fragment>
	);
};

export default Landing;
