import slugify from "@sindresorhus/slugify";

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
    })
    return _value;
}

export function generateRandomNumber([start, end]: number[]) {
    return Math.random() * (end - start) + start;
}
