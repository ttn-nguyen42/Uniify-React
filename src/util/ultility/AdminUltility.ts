import { SchoolSchema } from "../schema/DatabaseSchema";

export function inputDataTransformation(rawData: SchoolSchema) {
    const sample = { ...rawData };
    // Debugging
    console.log(sample);
}
