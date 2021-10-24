export type MethodGradeSchema = {
    method: string;
    grade: number;
}
export type GradeDataSchema = {
    year: string;
    thptqg: MethodGradeSchema[];
    dgnl?: MethodGradeSchema[];
    xths?: MethodGradeSchema[];
};

export type MajorSchema = {
    major: string;
    gradeData: GradeDataSchema[];
};

export type HeaderSchema = {
    schoolName: string;
    englishName: string;
    averageRating: number; // Assign a random number
    numberOfRating: string; // Assign a random number
};

export type GallerySchema = {
    mainImage: string;
    sideImage1: string;
    sideImage2: string;
};

export type MajorListSchema = {
    allMajorList: string[];
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
    description: string;
    subjectOfEducation: string[];
    programs: string[];
    entryMonth: string[];
    studyTime: string[];
    facilityImage: string[];
};

export type FacilitySchema = {
    branches: string[];
    scaleOfOperation: string; // Assign a random number
    supportingFacility: string[];
    labs: string[];
};

export type SchoolSchema = {
    category: object;
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
    numberOfRating: string;
    shortLocation: string;
    locationCity: string;
    category: string[];
    id: string;
    previewImage: string;
};