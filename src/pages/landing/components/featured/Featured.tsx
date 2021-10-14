import style from "./Featured.module.scss";

import Badge from "react-bootstrap/Badge";
import RecommendedCard from "../../../../components/cards/recommended/RecommendedCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

import { FeatureProps } from "../../../../util/types/Interface";
import { MinimalCardType } from "../../../../util/types/Type";

const Featured: React.FC<FeatureProps> = (props) => {
	const feature = props.type;
	const objectList = feature.itemList.map((item: MinimalCardType) => (
		<SwiperSlide>
			<RecommendedCard info={item} />
		</SwiperSlide>
	));

	return (
		<div className={style.featured}>
			<div className={style.header}>
				<h3>{feature.heading}</h3>
				<p>
					{feature.badge.enable && (
						<Badge bg={feature.badge.variant} className="me-2">
							{feature.badge.content}
						</Badge>
					)}
					{feature.subheading}
				</p>
			</div>
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={20}
				freeMode={true}
				className="mySwiper"
			>
				{objectList}
			</Swiper>
		</div>
	);
};

export default Featured;
