import style from "./CarouselSlider.module.scss";

const CarouselSlider: React.FC = (props) => {
	return <div className={style.carousel}>{props.children}</div>;
};

export default CarouselSlider;
