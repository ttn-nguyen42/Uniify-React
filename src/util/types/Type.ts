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
