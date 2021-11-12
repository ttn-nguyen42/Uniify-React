import {
    GradeDataSchema,
    MajorSchema,
    MethodGradeSchema,
    SchoolSchema,
} from "../schema/DatabaseSchema";
import { generateRandomNumber, splitString } from "./UtilityFunctions";
import { dgnlOptions, xthsOptions } from "../default/DefaultOptions";

function classifyDGNLType(type: string) {
    if (type === dgnlOptions[0]) {
        return [800, 1200];
    } else if (type === dgnlOptions[1]) {
        return [50, 150];
    } else if (type === dgnlOptions[2]) {
        return [500, 1000];
    } else if (type === dgnlOptions[3]) {
        return [15, 30];
    } else {
        return null;
    }
}

function classifyXTHSType(type: string) {
    if (type === xthsOptions[0]) {
        return [15, 30];
    } else {
        return null;
    }
}

function generateRandomGradeTHPT(thpqg: string[]) {
    // Return a MethodGradeSchema[]
    let methodGradeDataArray: MethodGradeSchema[] = [];
    thpqg.forEach((method: string) => {
        const _methodGradeData: MethodGradeSchema = {
            method: method,
            grade: +generateRandomNumber([15, 30]).toFixed(2),
        };
        methodGradeDataArray.push(_methodGradeData);
    });
    return methodGradeDataArray;
}

function generateRandomGradeDGNL(dgnl: string[]) {
    // Return a MethodGradeSchema[]
    let methodGradeDataArray: MethodGradeSchema[] = [];
    dgnl.forEach((method: string) => {
        const threshold = classifyDGNLType(method);
        if (threshold === null) {
            return;
        } else {
            const _methodGradeData: MethodGradeSchema = {
                method: method,
                grade: Math.round(generateRandomNumber(threshold)),
            };
            methodGradeDataArray.push(_methodGradeData);
        }
    });
    return methodGradeDataArray;
}

function generateRandomGradeXTHS(xths: string[]) {
    // Return a MethodGradeSchema[]
    let methodGradeDataArray: MethodGradeSchema[] = [];
    xths.forEach((method: string) => {
        const threshold = classifyXTHSType(method);
        if (threshold === null) {
            return;
        } else {
            const _methodGradeData: MethodGradeSchema = {
                method: method,
                grade: +generateRandomNumber([15, 30]).toFixed(2),
            };
            methodGradeDataArray.push(_methodGradeData);
        }
    });
    return methodGradeDataArray;
}

function generateRandomGradeByYear(
    [dgnl, thptqg, xths]: string[][],
    [begin, end]: number[]
) {
    // Return a GradeDataSchema[]
    let gradeDataArray: GradeDataSchema[] = [];
    // Validity check
    for (let i = begin; i <= end; i++) {
        const _gradeData: GradeDataSchema = {
            year: i.toString(),
            thptqg: generateRandomGradeTHPT(thptqg),
            dgnl: generateRandomGradeDGNL(dgnl),
            xths: generateRandomGradeXTHS(xths),
        };
        // Clear empty entries
        if (_gradeData.dgnl?.length === 0) {
            delete _gradeData.dgnl;
        }
        if (_gradeData.xths?.length === 0) {
            delete _gradeData.xths;
        }
        gradeDataArray.push(_gradeData);
    }
    return gradeDataArray;
}

export function handleGradeData(
    majorList: string[],
    [dgnl, thptqg, xths]: string[][]
) {
    const yearBegin = 2015;
    const yearNow = new Date().getFullYear();
    let gradeDataByMajorArray: MajorSchema[] = [];
    majorList.forEach((major: string) => {
        const _gradeDataByMajor: MajorSchema = {
            major: major,
            gradeData: generateRandomGradeByYear(
                [dgnl, thptqg, xths],
                [yearBegin, yearNow]
            ),
        };
        gradeDataByMajorArray.push(_gradeDataByMajor);
    });
    return gradeDataByMajorArray;
}

export function inputDataTransformation(rawData: SchoolSchema) {
    let sample = { ...rawData };
    const separator = ";";
    /*
        Split string
     */
    // Split: contact
    const _address = splitString(sample.contact.address[0], separator);
    const _contactEmail = splitString(
        sample.contact.contactEmail[0],
        separator
    );
    const _contactNumber = splitString(
        sample.contact.contactNumber[0],
        separator
    );
    const _mainWebsite = splitString(sample.contact.mainWebsite[0], separator);
    const _schoolCode = splitString(sample.contact.schoolCode[0], separator);
    // Split: facility
    const _branches = splitString(sample.facility.branches[0], separator);
    // Split: major
    const _allMajorList = splitString(sample.major.allMajorList[0], separator);
    // Splt: overview
    const _facilityImage = splitString(
        sample.overview.facilityImage[0],
        separator
    );

    /*
        Random number
     */
    const _scaleOfOperation = generateRandomNumber([30, 60]).toFixed(1) + " ha";
    const _averageRating = Math.round(generateRandomNumber([3, 5]));
    const _numberOfRating = Math.round(
        generateRandomNumber([40, 300])
    ).toString();
    // Extract types of admission method that are accepted
    const _dgnl = sample.admission.dgnl;
    const _thptqg = sample.admission.thptqg;
    const _xths = sample.admission.xths;
    // Handle major grade data
    const _gradeData = handleGradeData(_allMajorList, [_dgnl, _thptqg, _xths]);
    /*
        New data
     */
    sample = {
        ...sample,
        header: {
            ...sample.header,
            averageRating: _averageRating,
            numberOfRating: _numberOfRating,
        },
        contact: {
            ...sample.contact,
            address: _address,
            contactNumber: _contactNumber,
            contactEmail: _contactEmail,
            mainWebsite: _mainWebsite,
            schoolCode: _schoolCode,
        },
        facility: {
            ...sample.facility,
            branches: _branches,
            scaleOfOperation: _scaleOfOperation,
        },
        major: {
            ...sample.major,
            allMajorList: _allMajorList,
            list: _gradeData,
        },
        overview: {
            ...sample.overview,
            facilityImage: _facilityImage,
        },
    };
    return sample;
}
