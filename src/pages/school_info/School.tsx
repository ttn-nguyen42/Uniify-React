import style from "./School.module.scss";

import SchoolHeader from "./components/school_header/SchoolHeader";
import SchoolGallery from "./components/school_gallery/SchoolGallery";
import SchoolOverview from "./components/school_overview/SchoolOverview";
import ApplyCard from "./components/apply_card/ApplyCard";

const SchoolInfo = () => {
	// const params = useParams<InfoParams>();
	// const { id, category, location } = params;
	// Retrieve data with params later

	return (
		<div className={style.info}>
			<SchoolHeader />
			<SchoolGallery />
			<section className={style.body}>
				<SchoolOverview />
				<ApplyCard />
			</section>
			<section className={style.graph}></section>
			<section className={style.map}></section>
			<section className={style.comment}></section>
		</div>
	);
};

export default SchoolInfo;
