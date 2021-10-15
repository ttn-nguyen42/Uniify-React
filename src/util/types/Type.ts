export type InfoParams = {
	id: string;
};

export type MinimalCardType = {
	name: string;
	englishName: string;
	rating: number;
	numberOfRating: number;
	shortLocation: string;
	imageUrl?: string;
	id: string;
};

export type RecommendedCardType = {
	info: MinimalCardType;
};

export type BadgeProps = {
    enable: boolean,
    variant: string,
    content: string,    
}

export type FeaturedType = {
    heading: string;
	badge: BadgeProps;
	subheading: string;
	itemList: MinimalCardType[];
}

export type CategoryType = {
    category: string,
    description: string,
    id: string,
}
