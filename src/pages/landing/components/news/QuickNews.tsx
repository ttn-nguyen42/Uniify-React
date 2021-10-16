import style from "./QuickNews.module.scss";

import { QuickNewsType, QuickNewsCardType } from "../../../../util/types/Type";
import { QuickNewsProps } from "../../../../util/types/Interface";

import QuickNewsCard from "../../../../components/cards/quick-news/QuickNewsCard";

const QuickNews: React.FC<QuickNewsProps> = (props) => {
	const quickNews: QuickNewsType = props.interface;
	const news = quickNews.news.map((news: QuickNewsCardType, index) => {
		return (
			<QuickNewsCard
				key={index}
				title={news.title}
				provider={news.provider}
				imageUrl={news.imageUrl}
				url={news.url}
				timestamp={news.timestamp}
			/>
		);
	});
	return (
		<div className={style.news}>
			<div className={style.header}>
				<h3>{quickNews.heading}</h3>
				<p>{quickNews.description}</p>
			</div>
			<div className={style["news-section"]}>{news}</div>
		</div>
	);
};

export default QuickNews;
