import style from "./GlobalExplorer.module.scss";

import Featured from "../../../landing/components/featured/Featured";

import { MinimalCardType } from "../../../../util/types/Type";

const dummyListSchool: MinimalCardType[] = [
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
	{
		name: "Đại học Bách khoa TP.HCM",
		englishName: "Ho Chi Minh University of Technology",
		rating: 5,
		numberOfRating: 240,
		shortLocation: "Quận 10, TP.HCM",
		location: "hochiminh",
		imageUrl: "https://via.placeholder.com/500",
		category: "cntt",
		id: "bhbwrhbeber",
	},
];

const GlobalExplorer = () => {
	return (
		<section className={style.explorer}>
			<Featured
				type={{
					heading: "Gần bạn nhất",
					subheading:
						"Các trường có địa điểm gần bạn vị trí của bạn nhất",
					badge: {
						enable: false,
						content: "",
						variant: "",
					},
					itemList: dummyListSchool,
				}}
			/>
			<Featured
				type={{
					heading: "Phù hợp với bạn",
					subheading:
						"Các trường có mức điểm chuẩn kỳ thi THPTQG phù hợp với bạn",
					badge: {
						enable: true,
						content: "Phù hợp",
						variant: "success",
					},
					itemList: dummyListSchool,
				}}
			/>
			<div className={style.header}>
				<h2>Có thể thú vị</h2>
				<p>
					Hãy mở rộng thêm nhiều những lựa chọn cho bản thân cùng
					Uniify
				</p>
			</div>
			<Featured
				type={{
					heading: "Trường quốc tế",
					subheading:
						"Những trường quốc tế có mặt trên khắp Việt Nam",
					badge: {
						enable: true,
						content: "Quốc tế",
						variant: "info",
					},
					itemList: dummyListSchool,
				}}
			/>
            <Featured
				type={{
					heading: "Liên kết quốc tế",
					subheading:
						"Những trường có các hệ liên kết quốc tế, toàn cầu hóa",
					badge: {
						enable: true,
						content: "Liên kết",
						variant: "primary",
					},
					itemList: dummyListSchool,
				}}
			/>
		</section>
	);
};

export default GlobalExplorer;
