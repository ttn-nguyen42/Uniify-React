import style from "./SchoolInfo.module.scss";

import SchoolHeader from "./components/school_header/SchoolHeader";
import SchoolGallery from "./components/school_gallery/SchoolGallery";
import SchoolOverview from "./components/school_overview/SchoolOverview";
import ApplyCard from "./components/apply_card/ApplyCard";
import MajorList from "./components/major_list/MajorList";
import AdmissionMethod from "./components/admission_method/AdmissionMethod";
import EntryGradeGraph from "./components/entry_grade_graph/EntryGradeGraph";

import { useParams } from "react-router";
import { InfoParams } from "../../util/types/Type";

import { useEffect, useState, Fragment } from "react";

import { FirestoreApp } from "../../util/api/Firebase";
import { doc, getDoc } from "firebase/firestore";

import { SchoolSchema } from "../../util/schema/DatabaseSchema";

import Spinner from "react-bootstrap/Spinner";

const SchoolInfo = () => {
    const params = useParams<InfoParams>();
    const [isLoading, updateLoading] = useState<boolean>(true);
    const [errorOccurred, updateError] = useState<boolean>(false);
    const [receivedData, updateData] = useState<SchoolSchema>();

    const { id } = params;

    useEffect(() => {
        const asyncFetch = async () => {
            const schoolRef = doc(FirestoreApp, "schooldata", id);
            const schoolFetch = await getDoc(schoolRef);
            if (schoolFetch.exists()) {
                updateData(schoolFetch.data() as SchoolSchema);
            } else {
                updateError(true);
            }
            updateLoading(false);
        };
        asyncFetch();
    }, [id]);

    return (
        <Fragment>
            {isLoading && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />
                </div>
            )}
            {!isLoading && (
                <div className={style.info}>
                    <SchoolHeader header={receivedData!.header} />
                    <SchoolGallery gallery={receivedData!.gallery} />
                    <section className={style.body}>
                        <SchoolOverview
                            overview={receivedData!.overview}
                            facility={receivedData!.facility}
                            category={receivedData!.category}
                        />
                        <ApplyCard
                            contact={receivedData!.contact}
                            id={id}
                            favorite={false}
                        />
                    </section>
                    <MajorList major={receivedData!.major} />
                    <AdmissionMethod admission={receivedData!.admission} />
                    <EntryGradeGraph major={receivedData!.major} />
                </div>
            )}
        </Fragment>
    );
};

export default SchoolInfo;
