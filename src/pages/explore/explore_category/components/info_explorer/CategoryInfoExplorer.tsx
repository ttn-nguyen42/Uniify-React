import { FC } from "react";
import { CategoryInfoExplorerProps } from "../../../../../util/types/Interface";

import style from "./CategoryInfoExplorer.module.scss";
import { ShortPreviewSchema } from "../../../../../util/schema/DatabaseSchema";
import ExploreCard from "../../../../../components/cards/explore_card/ExploreCard";

const CategoryInfoExplorer: FC<CategoryInfoExplorerProps> = (props) => {
    const { data } = props;
    let componentList: any = [];
    let empty: boolean = false;
    if (data.length !== 0 || data !== undefined) {
        componentList = data.map((item: ShortPreviewSchema) => (
            <ExploreCard info={item} />
        ));
    }

    if (data.length === 0) {
        empty = true;
    }

    return (
        <div className={style.info}>
            {empty && (
                <div className={style["no-result"]}>
                    <p>Không có kết quả</p>
                </div>
            )}
            {!empty && <div className={style.grid}>{componentList}</div>}
        </div>
    );
};

export default CategoryInfoExplorer;
