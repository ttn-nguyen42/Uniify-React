import { MethodGradeSchema } from "../schema/DatabaseSchema";

export type InfoParams = {
    id: string;
};

export type MinimalCardType = {
    name: string;
    englishName: string;
    rating: number;
    numberOfRating: number;
    shortLocation: string;
    location: string;
    imageUrl?: string;
    category: string;
    id: string;
};

export type RecommendedCardType = {
    info: MinimalCardType;
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
    itemList: MinimalCardType[];
};

export type CategoryType = {
    category: string;
    description: string;
    id: string;
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
