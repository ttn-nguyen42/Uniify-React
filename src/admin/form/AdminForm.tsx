import style from "./AdminForm.module.scss";

import SchoolSchemaInput from "./components/school_schema/SchoolSchemaInput";
import OverviewSchemaInput from "./components/overview_schema/OverviewSchemaInput";
import MajorSchemaInput from "./components/major_schema/MajorSchemaInput";
import HeaderSchemaInput from "./components/header_schema/HeaderSchemaInput";
import GallerySchemaInput from "./components/gallery_schema/GallerySchemaInput";
import FacilitySchemaInput from "./components/facility_schema/FacilitySchemaInput";
import ContactSchemaInput from "./components/contact_schema/ContactSchemaInput";

import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RootState } from "../../util/state/store/globalStore";
import React from "react";

import { inputDataTransformation } from "../../util/ultility/AdminUltility";

const AdminForm = () => {
    const adminState = useSelector((state: RootState) => state.admin);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        inputDataTransformation(adminState);
    };

    return (
        <section className={style.form}>
            <Form onSubmit={handleSubmit}>
                <HeaderSchemaInput />
                <SchoolSchemaInput />
                <OverviewSchemaInput />
                <GallerySchemaInput />
                <FacilitySchemaInput />
                <ContactSchemaInput />
                <MajorSchemaInput />
                <Button type="button" variant="success">
                    Nhập lên cơ sở dữ liệu
                </Button>
            </Form>
        </section>
    );
};

export default AdminForm;
