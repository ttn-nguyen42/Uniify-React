import style from "./RecommendedCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { RatingView } from "react-simple-star-rating";

import { RecommendedCardType } from "../../../util/types/Type";

import { useHistory } from "react-router";

import "swiper/swiper.scss";

const RecommendedCard: React.FC<RecommendedCardType> = (props) => {
	const history = useHistory();
	const info = props.info;
	const imageClickHandler = () => {
		history.push(
			`/explore/${info.category}/${info.location}/${info.id}`
		);
	};
	return (
		<div className={style.recommended}>
			<div className={style.image}>
				<img
					src={info.imageUrl}
					alt={info.name}
					onClick={imageClickHandler}
				/>
			</div>
			<div className={style.content}>
				<h4>{info.name}</h4>
				<p className={style.short}>{info.englishName}</p>
				<div className={style.rating}>
					<RatingView
						ratingValue={info.rating}
						emptyColor="#383838"
					/>
					<span className={style.number}>
						({info.numberOfRating} đánh giá)
					</span>
				</div>
				<p className={style.location}>
					<FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
					{info.shortLocation}
				</p>
			</div>
		</div>
	);
};

export default RecommendedCard;
