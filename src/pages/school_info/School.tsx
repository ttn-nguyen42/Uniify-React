import { useParams } from "react-router";

import style from "./School.module.scss";

import { InfoParams } from "../../util/types/Type";

const SchoolInfo = () => {
	const params = useParams<InfoParams>();
	return <div className={style.info}>{params.id + params.category + params.location}</div>;
};

export default SchoolInfo;
