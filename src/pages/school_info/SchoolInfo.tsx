import style from "./SchoolInfo.module.scss";

import SchoolHeader from "./components/school_header/SchoolHeader";
import SchoolGallery from "./components/school_gallery/SchoolGallery";
import SchoolOverview from "./components/school_overview/SchoolOverview";
import ApplyCard from "./components/apply_card/ApplyCard";
import MajorList from "./components/major_list/MajorList";
import EntryGradeGraph from "./components/entry_grade_graph/EntryGradeGraph";
import AdmissionMethod from "./components/admission_method/AdmissionMethod";

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
            <MajorList />
            <AdmissionMethod />
            <EntryGradeGraph />
            <section className={style.map}></section>
            <section className={style.comment}></section>
        </div>
    );
};

export default SchoolInfo;
