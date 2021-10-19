import style from "./ExploreCard.module.scss";

import { RatingView } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router";

import { ExploreCardProps } from "../../../util/types/Interface";

const ExploreCard: React.FC<ExploreCardProps> = (props) => {
	const info = props.info;

	const history = useHistory();

	const imageClickHandler = () => {
		history.push(
			`/explore/${info.category}/${info.location}/${info.id}`
		);
	};

	return (
		<div className={style.card}>
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
						className={style.icon}
						emptyColor="#383838"
                        size={15}
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

export default ExploreCard;
