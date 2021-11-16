import style from "./CategoryCard.module.scss";

import { CategoryType } from "../../../util/types/Type";
import { CategoryProps } from "../../../util/types/Interface";

import { useHistory } from "react-router";

const CategoryCard: React.FC<CategoryProps> = (props) => {
    const category: CategoryType = props.category;
    const history = useHistory();

    const clickHandler = () => {
        history.push("/category/" + category.key);
    };

    return (
        <div className={style.category} onClick={clickHandler}>
            <h5 className={style.header}>{category.category}</h5>
            <div className={style.description}>{category.description}</div>
        </div>
    );
};

export default CategoryCard;
