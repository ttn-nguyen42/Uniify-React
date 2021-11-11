import slugify from "@sindresorhus/slugify";
import { GradeDataSchema, MethodGradeSchema } from "../schema/DatabaseSchema";
import { ChartDataType } from "../types/Type";

export function slugifyLocation(string: string) {
    return slugify(string);
}

export function slugifyCategory(string: string) {
    const removeAnd = string.replace("và", "");
    return slugify(removeAnd);
}

export function filterArray(array: any, value: string) {
    return array.filter((item: string) => item !== value);
}

export function splitString(value: string, separator: string) {
    let _value = value.split(separator);
    // Remove empty element
    _value = _value.filter((item: string) => item.length !== 0);
    // Remove spacing in front and in the back of elements
    _value.forEach((item: string, index) => {
        _value[index] = item.trim();
    });
    return _value;
}

export function generateRandomNumber([start, end]: number[]) {
    return Math.random() * (end - start) + start;
}

export function transformGradeData(rawData: GradeDataSchema[]) {
    // Create destination object
    let transformedData: ChartDataType = {
        thptqg: [],
        dgnl: [],
        xths: [],
    };

    // Loop through each year
    for (let eachYearData of rawData) {
        const currentYear = parseInt(eachYearData.year);
        if (eachYearData.thptqg !== undefined || eachYearData.thptqg !== null) {
            let transformedTHPTObject = { year: currentYear };
            eachYearData.thptqg.forEach((methodAndGrade: MethodGradeSchema) => {
                transformedTHPTObject = {
                    ...transformedTHPTObject,
                    [methodAndGrade.method]: methodAndGrade.grade,
                };
            });
            transformedData.thptqg?.push(transformedTHPTObject);
        }
        if (eachYearData.dgnl !== undefined || eachYearData.dgnl !== null) {
            let transformedDGNLObject = { year: currentYear };
            eachYearData.dgnl?.forEach((methodAndGrade: MethodGradeSchema) => {
                transformedDGNLObject = {
                    ...transformedDGNLObject,
                    [methodAndGrade.method]: methodAndGrade.grade,
                };
            });
            transformedData.dgnl?.push(transformedDGNLObject);
        }
        if (eachYearData.xths !== undefined || eachYearData.xths !== null) {
            let transformedXTHSObject = { year: currentYear };
            eachYearData.xths?.forEach((methodAndGrade: MethodGradeSchema) => {
                transformedXTHSObject = {
                    ...transformedXTHSObject,
                    [methodAndGrade.method]: methodAndGrade.grade,
                };
            });
            transformedData.xths?.push(transformedXTHSObject);
        }
    }

    return transformedData;
}
