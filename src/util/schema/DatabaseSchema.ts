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
    averageRating: number; // Assign a random number
    numberOfRating: number; // Assign a random number
};

export type GallerySchema = {
    mainImage: string;
    sideImage1: string;
    sideImage2: string;
};

export type MajorListSchema = {
    list: string | MajorSchema[];
};

export type ContactSchema = {
    address: string[] | string;
    contactEmail: string[] | string;
    contactNumber: string[] | string;
    mainWebsite: string[] | string;
    schoolCode: string[] | string;
};

export type AdmissionSchema = {
    thptqg: string[];
    dgnl: string[];
    xths: string[];
    otherMethod: string[];
};

export type OverviewSchema = {
    description: string;
    subjectOfEducation: string[];
    programs: string[];
    entryMonth: string[];
    studyTime: string[];
    facilityImage: string[] | string;
};

export type FacilitySchema = {
    branches: string[] | string;
    scaleOfOperation: number; // Assign a random number
    supportingFacility: string[];
    labs: string[];
};

export type CategorySchema = {
    "kinh-doanh-kinh-te"?: boolean;
    "san-xuat-che-bien"?: boolean;
    "kien-truc-xay-dung"?: boolean;
    "cong-nghe-thong-tin"?: boolean;
    "luat-nhan-van"?: boolean;
    "nghe-thuat-do-hoa"?: boolean;
    "bao-chi-xa-hoi"?: boolean;
    "khoa-hoc-co-ban"?: boolean;
    "giao-duc-su-pham"?: boolean;
    "nong-lam-ngu-nghiep"?: boolean;
};

export type SchoolSchema = {
    category: CategorySchema;
    locationCity: string;
    shortLocation: string;
    header: HeaderSchema;
    gallery: GallerySchema;
    contact: ContactSchema;
    admission: AdmissionSchema;
    overview: OverviewSchema;
    facility: FacilitySchema;
    major: MajorListSchema;
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
