import style from "./InfoExplorer.module.scss";

import VerticalNav from "../vertical_nav/VerticalNav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InfoList from "../info_list/InfoList";

import { useSelector } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";

const InfoExplorer = () => {

	const categories = [
		"kdkt",
		"sxcb",
		"ktxd",
		"cntt",
		"ltnv",
		"ntdh",
		"bcxh",
		"khcb",
		"spgd",
		"nlnn",
	];

	const location = useSelector((state: RootState) => state.explorer.location);

	const panes = categories.map((category: string, index) => (
		<Tab.Pane key={index} eventKey={category}>
			<InfoList category={category} location={location} />
		</Tab.Pane>
	));

	return (
		<section className={style.explorer}>
			<Tab.Container defaultActiveKey="kdkt">
				<Row className={style.container}>
					<Col sm={3}>
						<VerticalNav />
					</Col>
					<Col>
						<Tab.Content>{panes}</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</section>
	);
};

export default InfoExplorer;
