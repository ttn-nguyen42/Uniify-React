export type HighSchoolInformationSchema = {
    schoolName: string;
    schoolAddress: string;
    schoolLocation: string;
    graduationYear: string;
}

export type ContactInformationSchema = {
    phoneNumber: string;
    contactAddress: string;
    contactLocation: string;
}

export type PersonalInformationSchema = {
    fullName: string;
    gender: "Nam" | "Nữ" | "";
    dateOfBirth: string;
    placeOfBirth: string;
    ethnic: string;
    socialId: string;
    socialIdProvider: string;
    socialIdDateOfProvision: string;
    registeredLocation: string;
    highschoolInformation: HighSchoolInformationSchema;
    contactInformation: ContactInformationSchema;
}
