import style from "./Featured.module.scss";

import Badge from "react-bootstrap/Badge";
import RecommendedCard from "../../../../components/cards/recommended/RecommendedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { FeatureProps } from "../../../../util/types/Interface";
import { ShortPreviewSchema } from "../../../../util/schema/DatabaseSchema";

SwiperCore.use([Navigation]);

const Featured: React.FC<FeatureProps> = (props) => {
    const feature = props.type;
    let objectList: any = [];
    if (feature.itemList !== undefined) {
        objectList = props.type.itemList.map(
            (item: ShortPreviewSchema, index) => {
                return (
                    <SwiperSlide key={index}>
                        <RecommendedCard info={item} />
                    </SwiperSlide>
                );
            }
        );
    }

    return (
        <div className={style.featured}>
            <div className={style.header}>
                <h3>{feature.heading}</h3>
                <p>
                    {feature.badge.enable && (
                        <Badge
                            bg={feature.badge.variant}
                            text={"light"}
                            className="me-2"
                        >
                            {feature.badge.content}
                        </Badge>
                    )}
                    {feature.subheading}
                </p>
            </div>
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={20}
                className="mySwiper"
            >
                {objectList}
            </Swiper>
        </div>
    );
};

export default Featured;
