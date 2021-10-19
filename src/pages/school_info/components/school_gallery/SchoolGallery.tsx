import style from "./SchoolGallery.module.scss";

const SchoolGallery = () => {
	return (
		<section className={style.image}>
			<div className={style["main-image"]}>
				<img
					src={"https://via.placeholder.com/1280x960.png"}
					alt={"HCMUT"}
				/>
			</div>
			<div className={style["side-image"]}>
				<img
					src={"https://via.placeholder.com/480x320.png"}
					alt={"HCMUT"}
					className={style["top-img"]}
				/>
				<img
					src={"https://via.placeholder.com/480x320.png"}
					alt={"HCMUT"}
					className={style["bottom-img"]}
				/>
			</div>
		</section>
	);
};

export default SchoolGallery;
