import {
    FeaturedType,
    CategoryType,
    QuickNewsType,
    MinimalCardType,
} from "./Type";

import {
    AdmissionSchema,
    ContactSchema,
    FacilitySchema,
    GallerySchema,
    HeaderSchema,
    MajorListSchema,
    OverviewSchema,
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
}

export interface ExploreCardProps {
    info: MinimalCardType;
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
