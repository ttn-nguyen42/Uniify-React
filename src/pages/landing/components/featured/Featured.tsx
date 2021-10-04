import style from "./Featured.module.scss";

import Badge from "react-bootstrap/Badge";

const Featured = () => {
	return (
		<div className={style.featured}>
			<div className={style.header}>
				<h3>
					Được đề xuất <Badge bg="warning" className="ms-1">Quảng cáo</Badge>
				</h3>
				<p>Những trường được giới thiệu bởi Uniify</p>
			</div>
		</div>
	);
};

export default Featured;
