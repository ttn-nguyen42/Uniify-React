import { FeaturedType, CategoryType, QuickNewsType, MinimalCardType } from "./Type";

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
}

export interface InfoListProps {
    category: string,
    location: string,
}

export interface ExploreCardProps {
    info: MinimalCardType,
}