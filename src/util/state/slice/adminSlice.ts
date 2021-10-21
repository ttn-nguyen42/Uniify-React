import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    AdmissionSchema,
    ContactSchema,
    FacilitySchema,
    GallerySchema,
    HeaderSchema,
    MajorListSchema,
    OverviewSchema,
    SchoolSchema,
} from "../../schema/DatabaseSchema";

const initialState: SchoolSchema = {
    category: {},
    locationCity: "",
    shortLocation: "",
    header: {
        schoolName: "",
        englishName: "",
        averageRating: 0,
        numberOfRating: 0,
    },
    gallery: {
        mainImage: "",
        sideImage1: "",
        sideImage2: "",
    },
    contact: {
        address: "",
        contactEmail: "",
        contactNumber: "",
        mainWebsite: "",
        schoolCode: "",
    },
    admission: {
        thptqg: [],
        dgnl: [],
        xths: [],
        otherMethod: [],
    },
    overview: {
        description: "",
        subjectOfEducation: [],
        programs: [],
        entryMonth: [],
        studyTime: [],
        facilityImage: "",
    },
    facility: {
        branches: "",
        scaleOfOperation: 0,
        supportingFacility: [],
        labs: [],
    },
    major: {
        list: [],
    },
};

export const adminSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers: {
        updateSchoolSchema: (
            state: SchoolSchema,
            payload: PayloadAction<any>
        ) => {
            state.category = payload.payload.category;
            state.locationCity = payload.payload.locationCity;
            state.shortLocation = payload.payload.shortLocation;
        },
        updateHeaderSchema: (
            state: SchoolSchema,
            payload: PayloadAction<HeaderSchema>
        ) => {
            state.header = payload.payload;
        },
        updateGallerySchema: (
            state: SchoolSchema,
            payload: PayloadAction<GallerySchema>
        ) => {
            state.gallery = payload.payload;
        },
        updateContactSchema: (
            state: SchoolSchema,
            payload: PayloadAction<ContactSchema>
        ) => {
            state.contact = payload.payload;
        },
        updateAdmissionSchema: (
            state: SchoolSchema,
            payload: PayloadAction<AdmissionSchema>
        ) => {
            state.admission = payload.payload;
        },
        updateOverviewSchema: (
            state: SchoolSchema,
            payload: PayloadAction<OverviewSchema>
        ) => {
            state.overview = payload.payload;
        },
        updateFacilitySchema: (
            state: SchoolSchema,
            payload: PayloadAction<FacilitySchema>
        ) => {
            state.facility = payload.payload;
        },
        updateMajorSchema: (
            state: SchoolSchema,
            payload: PayloadAction<MajorListSchema>
        ) => {
            state.major = payload.payload;
        },
    },
});

export const {
    updateAdmissionSchema,
    updateContactSchema,
    updateFacilitySchema,
    updateGallerySchema,
    updateHeaderSchema,
    updateMajorSchema,
    updateOverviewSchema,
    updateSchoolSchema,
} = adminSlice.actions;

export default adminSlice.reducer;
