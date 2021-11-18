import {
	FeaturedType,
	CategoryType,
	QuickNewsType,
	LoginCredential,
	RegisterCredential,
} from "./Type";

import {
	AdmissionSchema,
	ContactSchema,
	FacilitySchema,
	GallerySchema,
	HeaderSchema,
	MajorListSchema,
	OverviewSchema,
	ShortPreviewSchema,
} from "../schema/DatabaseSchema";

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
	category: string;
	location: string;
	data: ShortPreviewSchema[];
	loading: boolean;
}

export interface ExploreCardProps {
	info: ShortPreviewSchema;
}

export interface SchoolInfoProps {
	header: HeaderSchema;
}

export interface SchoolOverviewProps {
	overview: OverviewSchema;
	facility: FacilitySchema;
	category: object;
}

export interface SchoolGalleryProps {
	gallery: GallerySchema;
}

export interface SchoolMajorListProps {
	major: MajorListSchema;
}

export interface SchoolAdmissionProps {
	admission: AdmissionSchema;
}

export interface SchoolGradeGraphProps {
	major: MajorListSchema;
}

export interface MajorPillProps {
	major: string;
	onClick: (major: string) => void;
}

export interface ApplyPillProps {
	contact: ContactSchema;
	id: string;
	favorite: boolean;
}

export interface TabularComponentProps {
	info: ShortPreviewSchema;
}

export interface ListTabularComponentProps {
	feature: string;
	info: ShortPreviewSchema;
}

export interface CategoryVerticalNavProps {
	selectedCategory: string;
}

export interface CategoryInfoExplorerProps {
	selectedCategory: string;
	data: ShortPreviewSchema[];
}

export interface LoginProps {
	submitLoginCredential: (payload: LoginCredential) => void;
	toggleLoading: () => void;
    hasError: boolean;
    errorMessage: string;
}

export interface RegisterProps {
	submitRegisterCredential: (payload: RegisterCredential) => void;
	toggleLoading: () => void;
    hasError: boolean;
    errorMessage: string;
}
