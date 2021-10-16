import style from "./Categories.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

import CategoryCard from "../../../../components/cards/categories/CategoryCard";

import { CategoryListProps } from "../../../../util/types/Interface";
import { CategoryType } from "../../../../util/types/Type";

const Categories: React.FC<CategoryListProps> = (props) => {
	const categoryCards = props.list.map((category: CategoryType) => {
		return (
			<SwiperSlide>
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
