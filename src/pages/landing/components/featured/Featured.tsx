import style from "./Featured.module.scss";

import Badge from "react-bootstrap/Badge";
import RecommendedCard from "../../../../components/cards/recommended/RecommendedCard";
import CarouselSlider from "../carousel/CarouselSlider";

const Featured = () => {
	return (
		<div className={style.featured}>
			<div className={style.header}>
				<h3>Được đề xuất</h3>
				<p>
					<Badge bg="warning" className="me-2">
						Quảng cáo
					</Badge>
					Những trường được giới thiệu bởi Uniify
				</p>
			</div>
			<div className={style.carousel}>
				<CarouselSlider>
					<RecommendedCard
						info={{
							name: "Đại học Bách khoa TP.HCM",
							englishName: "Ho Chi Minh University of Technology",
							rating: 5,
							numberOfRating: 240,
							shortLocation: "Quận 10, TP.HCM",
							imageUrl: "https://via.placeholder.com/500",
							id: "bhbwrhbeber",
						}}
					/>
					<RecommendedCard
						info={{
							name: "Đại học Bách khoa TP.HCM",
							englishName: "Ho Chi Minh University of Technology",
							rating: 5,
							numberOfRating: 240,
							shortLocation: "Quận 10, TP.HCM",
							imageUrl: "https://via.placeholder.com/500",
							id: "bhbwrhbeber",
						}}
					/>
					<RecommendedCard
						info={{
							name: "Đại học Bách khoa TP.HCM",
							englishName: "Ho Chi Minh University of Technology",
							rating: 5,
							numberOfRating: 240,
							shortLocation: "Quận 10, TP.HCM",
							imageUrl: "https://via.placeholder.com/500",
							id: "bhbwrhbeber",
						}}
					/>
					<RecommendedCard
						info={{
							name: "Đại học Bách khoa TP.HCM",
							englishName: "Ho Chi Minh University of Technology",
							rating: 5,
							numberOfRating: 240,
							shortLocation: "Quận 10, TP.HCM",
							imageUrl: "https://via.placeholder.com/500",
							id: "bhbwrhbeber",
						}}
					/>
					<RecommendedCard
						info={{
							name: "Đại học Bách khoa TP.HCM",
							englishName: "Ho Chi Minh University of Technology",
							rating: 5,
							numberOfRating: 240,
							shortLocation: "Quận 10, TP.HCM",
							imageUrl: "https://via.placeholder.com/500",
							id: "bhbwrhbeber",
						}}
					/>
				</CarouselSlider>
			</div>
		</div>
	);
};

export default Featured;
