import { ShortPreviewSchema } from "../schema/DatabaseSchema";

export type InfoParams = {
    id: string;
};

export type RecommendedCardType = {
    info: ShortPreviewSchema;
};

export type BadgeProps = {
    enable: boolean;
    variant: string;
    content: string;
};

export type FeaturedType = {
    heading: string;
    badge: BadgeProps;
    subheading: string;
    itemList: ShortPreviewSchema[];
};

export type CategoryType = {
    category: string;
    description: string;
    key: string;
};

export type QuickNewsType = {
    heading: string;
    description: string;
    news: QuickNewsCardType[];
};

export type QuickNewsCardType = {
    title: string;
    provider: string;
    url: string;
    imageUrl: string;
    timestamp: Date;
};

export type ChartDataType = {
    thptqg?: object[];
    dgnl?: object[];
    xths?: object[];
};

export type LoginCredential = {
    email: string;
    password: string;
    persistentLogin: boolean;
};

export type RegisterCredential = {
    email: string;
    password: string;
};