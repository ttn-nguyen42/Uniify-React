import { FeaturedType, CategoryType, QuickNewsType } from "./Type";

export interface FeatureProps {
	type: FeaturedType;
}

export interface CategoryProps {
	category: CategoryType;
}

export interface CategoryListProps {
	list: CategoryType[];
	heading: string;
	description: string;
}

export interface QuickNewsProps {
	interface: QuickNewsType;
}

export interface MapExplorerProps {
	setTooltip: (data: string) => void;
    setSelectedLocation: (data: string) => void;
}
