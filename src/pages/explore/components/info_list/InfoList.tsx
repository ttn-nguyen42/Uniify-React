import style from "./InfoList.module.scss";

import { InfoListProps } from "../../../../util/types/Interface";
import { MinimalCardType } from "../../../../util/types/Type";
import ExploreCard from "../../../../components/cards/explore_card/ExploreCard";

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

const InfoList: React.FC<InfoListProps> = (props) => {

	const schoolList = dummyListSchool.map((item: MinimalCardType, index) => (
		<ExploreCard key={index} info={item} />
	));

	return (
		<div className={style.info}>
			<div className={style.grid}>{schoolList}</div>
			{/* <Pagination>{paginationItem}</Pagination> */}
		</div>
	);
};

export default InfoList;
