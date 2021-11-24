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
	SchoolSchema,
	ShortPreviewSchema,
} from "../schema/DatabaseSchema";
import { PersonalInformationSchema } from "../schema/PersonalInformationSchema";

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

export interface DashboardBodyProps {
	userInfo: any;
	userId: string;
}

export interface DashboardContentProps {
	info: DashboardBodyProps;
}

export interface FavoriteTabularElementProps {
	info: ShortPreviewSchema;
	remove: (info: ShortPreviewSchema) => void;
}

export interface ApplyModalProps {
	toggle: () => void;
	userId: string | null | undefined;
	schoolId: string;
	isShowing: boolean;
}

export interface ApplyModalNavProps {
	selectedMethod: string | null;
	selectMethod: (method: string | null) => void;
	data: SchoolSchema;
}

export interface ApplyModalContentProps {
	selectedMethod: string;
	apply: (
		method: string,
		userData: any,
		schoolId: string,
		userId: string,
		selectedMajor: string[],
		schoolData: any
	) => void;
	schoolId: string;
	userId: string;
	userData: any;
	schoolData: any;
}

export interface CompletedCheckmarkProps {
	completed: boolean;
	message: string;
}

export interface DashboardApplicationStatusProps {
	info: DashboardBodyProps;
}
