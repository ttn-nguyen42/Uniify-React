import { FC } from "react";
import Nav from "react-bootstrap/Nav";
import { ApplyModalNavProps } from "../../../../../../util/types/Interface";

const ApplyModalNav: FC<ApplyModalNavProps> = (props) => {
	const { selectMethod, data } = props;
	return (
		<Nav fill variant="tabs" onSelect={selectMethod}>
			{data.admission.xths.map((method: string, index: number) => (
				<Nav.Item key={index}>
					<Nav.Link eventKey={method}>{method}</Nav.Link>
				</Nav.Item>
			))}
		</Nav>
	);
};

export default ApplyModalNav;
