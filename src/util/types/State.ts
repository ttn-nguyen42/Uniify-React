import { ShortPreviewSchema } from "../schema/DatabaseSchema";

export type SchoolInfoNavigatorState = {
    currentMajor: string;
};

export type ExplorerState = {
    namePunctuation: string;
    location: string;
    category: string;
};

export type AdminState = {
    feature: string;
    currentSelectionFeatured: ShortPreviewSchema[];
    currentSelectionForYou: ShortPreviewSchema[];
    currentSelectionInternational: ShortPreviewSchema[];
    currentSelectionAssociate: ShortPreviewSchema[];
};
