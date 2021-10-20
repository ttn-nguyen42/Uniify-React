import style from "./AdminForm.module.scss";

import ShortSchemaInput from "./components/short_preview_schema/ShortSchemaInput";
import SchoolSchemaInput from "./components/school_schema/SchoolSchemaInput";
import OverviewSchemaInput from "./components/overview_schema/OverviewSchema";
import MajorSchemaInput from "./components/major_schema/MajorSchemaInput";
import HeaderSchemaInput from "./components/header_schema/HeaderSchemaInput";
import GallerySchemaInput from "./components/gallery_schema/GallerySchemaInput";
import FacilitySchemaInput from "./components/facility_schema/FacilitySchemaInput";
import ContactSchemaInput from "./components/contact_schema/ContactSchemaInput";
import AdmissionSchemaInput from "./components/admission_schema/AdmissionSchemaInput";

const AdminForm = () => {
    return <section className={style.form}>
        <SchoolSchemaInput />
        <ShortSchemaInput />
        <OverviewSchemaInput />
        <HeaderSchemaInput />
        <GallerySchemaInput />
        <FacilitySchemaInput />
        <ContactSchemaInput />
        <AdmissionSchemaInput />
        <MajorSchemaInput />
    </section>
}

export default AdminForm;