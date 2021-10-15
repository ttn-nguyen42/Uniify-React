import { FeaturedType, CategoryType } from "./Type";

export interface FeatureProps {
	type: FeaturedType;
}

export interface CategoryProps {
	category: CategoryType;
}

export interface CategoryListProps {
    list: CategoryType[],
    heading: string,
    description: string,
}