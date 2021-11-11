import style from "./QuickNewsCard.module.scss";

import { QuickNewsCardType } from "../../../util/types/Type";

const QuickNewsCard: React.FC<QuickNewsCardType> = (props) => {
    const imageUrl = props.imageUrl;
    const currentTime = new Date();
    let unitTime = "giờ";
    let timeDifference = currentTime.getHours() - props.timestamp.getHours();
    if (timeDifference === 0) {
        unitTime = "ngày";
        timeDifference = currentTime.getDate() - props.timestamp.getDate();
    } else if (timeDifference < 0) {
        timeDifference = 24 + timeDifference;
    }
    return (
        <div className={style.card}>
            <div className={style.heading}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.3) 80%), url(${imageUrl})`,
                        backgroundPosition: "center",
                    }}
                    className={style.content}
                >
                    <span
                        className={style.provider}
                        style={{
                            color: "white",
                        }}
                    >
                        {`${props.provider} • ${timeDifference} ${unitTime} trước`}
                    </span>
                    <h5
                        className={style.title}
                        style={{
                            color: "white",
                        }}
                    >
                        {props.title}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default QuickNewsCard;
