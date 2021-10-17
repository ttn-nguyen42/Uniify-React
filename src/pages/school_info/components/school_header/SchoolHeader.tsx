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
				<span className={style.divider}>•</span>
				<span className={style.address}>
					268 Lý Thường Kiệt, phường 12, quận 10, TP.HCM
				</span>
				<span className={style.divider}>•</span>
				<span className={style.address}>
					Khu đô thị Đại học Quốc gia TP.HCM, TP.HCM
				</span>
			</div>
		</section>
	);
};

export default SchoolHeader;
