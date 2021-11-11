import style from "./SchoolHeader.module.scss";

import { RatingView } from "react-simple-star-rating";

import { SchoolInfoProps } from "../../../../util/types/Interface";

import { FC } from "react";

const SchoolHeader: FC<SchoolInfoProps> = (props) => {
    const { header } = props;
    return (
        <section className={style.header}>
            <h1>{header.schoolName}</h1>
            <p>{header.englishName}</p>
            <div className={style.additional}>
                <RatingView
                    ratingValue={header.averageRating}
                    emptyColor="#383838"
                    size={20}
                />
                <span className={style.number}>
                    ({header.numberOfRating} đánh giá)
                </span>
            </div>
        </section>
    );
};

export default SchoolHeader;
