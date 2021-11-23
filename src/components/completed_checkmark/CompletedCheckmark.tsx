import { FC } from "react";
import { CompletedCheckmarkProps } from "../../util/types/Interface";

import { faCheck, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./CompletedCheckmark.module.scss";

const CompletedCheckmark: FC<CompletedCheckmarkProps> = (props) => {
	const { message, completed } = props;
	return completed ? (
		<div className={`${style.complete} ${style.general}`}>
			<p>
				{message}{" "}
				<FontAwesomeIcon
					icon={faCheck}
					fixedWidth
					className={style.icon}
				/>
			</p>
		</div>
	) : (
		<div className={`${style.incomplete} ${style.general}`}>
			<p>
				{message}{" "}
				<FontAwesomeIcon
					icon={faCross}
					fixedWidth
					className={style.icon}
				/>
			</p>
		</div>
	);
};

export default CompletedCheckmark;
