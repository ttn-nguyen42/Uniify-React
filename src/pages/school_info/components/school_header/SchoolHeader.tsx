import style from "./SchoolHeader.module.scss";

import { RatingView } from "react-simple-star-rating";

const SchoolHeader = () => {
	return (
		<section className={style.header}>
			<h1>Trường Đại học Bách khoa TP.HCM</h1>
			<p>Ho Chi Minh City University of Technology</p>
			<div className={style.additional}>
				<RatingView ratingValue={5} emptyColor="#383838" size={20} />
				<span className={style.number}>(247 đánh giá)</span>
			</div>
		</section>
	);
};

export default SchoolHeader;
