import style from "./Categories.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import CategoryCard from "../../../../components/cards/categories/CategoryCard";

import { CategoryListProps } from "../../../../util/types/Interface";
import { CategoryType } from "../../../../util/types/Type";

SwiperCore.use([Navigation]);

const Categories: React.FC<CategoryListProps> = (props) => {
	const categoryCards = props.list.map((category: CategoryType, index) => {
		return (
			<SwiperSlide key={index}>
				<CategoryCard category={category} />
			</SwiperSlide>
		);
	});
	return (
		<div className={style.categories}>
			<div className={style.header}>
				<h3>{props.heading}</h3>
				<p>{props.description}</p>
			</div>
			<Swiper
				navigation={true}
				slidesPerView={3}
				slidesPerColumn={2}
				slidesPerColumnFill="row"
				spaceBetween={10}
				className="mySwiper"
			>
				{categoryCards}
			</Swiper>
		</div>
	);
};

export default Categories;
