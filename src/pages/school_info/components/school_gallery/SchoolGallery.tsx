import { SchoolGalleryProps } from "../../../../util/types/Interface";
import style from "./SchoolGallery.module.scss";

import { FC } from "react";

const SchoolGallery: FC<SchoolGalleryProps> = (props) => {
    const { gallery } = props;
    return (
        <section className={style.image}>
            <div className={style["main-image"]}>
                <img
                    src={gallery.mainImage}
                    alt={"Hình ảnh giới thiệu trường 1"}
                />
            </div>
            <div className={style["side-image"]}>
                <img
                    src={gallery.sideImage1}
                    alt={"Hình ảnh giới thiệu trường 2"}
                    className={style["top-img"]}
                />
                <img
                    src={gallery.sideImage2}
                    alt={"Hình ảnh giới thiệu trường 3"}
                    className={style["bottom-img"]}
                />
            </div>
        </section>
    );
};

export default SchoolGallery;
