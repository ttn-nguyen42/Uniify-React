import style from "./Subheader.module.scss";

interface SubheaderProps {
	heading: string;
	desc: string;
}

const Subheader: React.FC<SubheaderProps> = (props) => {
	return (
		<section className={style.header}>
			<h3>{props.heading}</h3>
            <p>{props.desc}</p>
		</section>
	);
};

export default Subheader;
