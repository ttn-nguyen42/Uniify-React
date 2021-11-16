import style from "./Categories.module.scss";

import CategoryCard from "../../../../components/cards/categories/CategoryCard";

import { CategoryListProps } from "../../../../util/types/Interface";
import { CategoryType } from "../../../../util/types/Type";

const Categories: React.FC<CategoryListProps> = (props) => {
	const categoryCards = props.list.map((category: CategoryType, index) => {
		return <CategoryCard key={index} category={category} />;
	});
	return (
		<div className={style.categories}>
			<div className={style.header}>
				<h3>{props.heading}</h3>
				<p>{props.description}</p>
			</div>
			<div className={style.grid}>{categoryCards}</div>
		</div>
	);
};

export default Categories;
