import style from "./InfoList.module.scss";

import { InfoListProps } from "../../../../util/types/Interface";
import ExploreCard from "../../../../components/cards/explore_card/ExploreCard";
import { ShortPreviewSchema } from "../../../../util/schema/DatabaseSchema";

import Spinner from "react-bootstrap/Spinner";

const InfoList: React.FC<InfoListProps> = (props) => {
    const { data, loading } = props;

    const schoolList = data.map((item: ShortPreviewSchema, index) => (
        <ExploreCard key={index} info={item} />
    ));

    return (
        <div className={style.info}>
            {loading && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />
                </div>
            )}
            {!loading && schoolList.length === 0 && (
                <div className={style["no-result"]}>
                    <p>Không có kết quả</p>
                </div>
            )}
            {!loading && schoolList.length !== 0 && (
                <div className={style.grid}>{schoolList}</div>
            )}
        </div>
    );
};

export default InfoList;
