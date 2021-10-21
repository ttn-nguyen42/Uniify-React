import slugify from "@sindresorhus/slugify";

export function slugifyLocation(string: string) {
    return slugify(string);
}

export function slugifyCategory(string: string) {
    const removeAnd = string.replace("và", "");
    return slugify(removeAnd);
}
