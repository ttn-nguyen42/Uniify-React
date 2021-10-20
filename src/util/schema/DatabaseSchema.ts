export type GradeDataSchema = {
    year: string;
    thptqg: number;
    dgnl?: number;
    xths?: number;
};

export type MajorSchema = {
    major: string;
    gradeData: GradeDataSchema[];
};

export type HeaderSchema = {
    schoolName: string;
    englishName: string;
    averageRating: number;
    numberOfRating: number;
};

export type GallerySchema = {
    mainImage: string;
    sideImage1: string;
    sideImage2: string;
};

export type MajorListSchema = {
    list: MajorSchema[];
};

export type ContactSchema = {
    address: string[];
    contactEmail: string[];
    contactNumber: string[];
    mainWebsite: string[];
    schoolCode: string[];
};

export type AdmissionSchema = {
    thptqg: string[];
    dgnl: string[];
    xths: string[];
    otherMethod: string[];
};

export type OverviewSchema = {
    description: string[];
    subjectOfEducation: string[];
    programs: string[];
    entryMonth: string[];
    studyTime: string[];
    facilityImage: string[];
};

export type FacilitySchema = {
    branches: string[];
    scaleOfOperation: number;
    supportingFacility: string[];
    labs: string[];
};

export type SchoolSchema = {
    category: string[];
    locationCity: string[];
    shortLocation: string;
    header: HeaderSchema;
    gallery: GallerySchema;
    contact: ContactSchema;
    admission: AdmissionSchema;
    overview: OverviewSchema;
    facility: FacilitySchema;
    major: MajorSchema;
};

export type ShortPreviewSchema = {
    schoolName: string;
    englishName: string;
    averageRating: number;
    numberOfRating: number;
    shortLocation: string;
    locationCity: string; // Take from SchoolSchema
    category: string; // Take from the first element of category in SchoolSchema
    id: string;
    previewImage: string;
};

/*
File structure in Realtime Database: 
*/
