import style from "./CategoryCard.module.scss";

import { CategoryType } from "../../../util/types/Type";
import { CategoryProps } from "../../../util/types/Interface";

const CategoryCard: React.FC<CategoryProps> = (props) => {
	const category: CategoryType = props.category;
	return (
		<div className={style.category}>
			<h5 className={style.header}>{category.category}</h5>
			<div className={style.description}>{category.description}</div>
		</div>
	);
};

export default CategoryCard;
