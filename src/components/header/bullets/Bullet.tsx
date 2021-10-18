import style from "./Bullet.module.scss";

interface BulletProps {
	heading: string;
	content: string[];
}

const Bullet: React.FC<BulletProps> = (props) => {
	return (
		<div className={style.bullet}>
			<h5>{props.heading}</h5>
			{props.content.map((item: string, index) => (
				<span key={index}>
					<b>{item}</b>
				</span>
			))}
		</div>
	);
};

export default Bullet;
