import HeaderText from "../../../../components/header/header_text/HeaderText";
import Subheader from "../../../../components/header/subheader/Subheader";
import ListTile from "../../../../components/list_tile/ListTile";

import {
    faUserGraduate,
    faBriefcase,
    faSchool,
    faCalendarDay,
    faClock,
    faMap,
    faLandmark,
    faBuilding,
    faFlask,
} from "@fortawesome/free-solid-svg-icons";

import style from "./SchoolOverview.module.scss";

import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { FC } from "react";
import { SchoolOverviewProps } from "../../../../util/types/Interface";
import { categoriesWithKey } from "../../../../util/default/DefaultOptions";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

const SchoolOverview: FC<SchoolOverviewProps> = (props) => {
    const { overview, facility, category } = props;

    const imageCarousel = overview.facilityImage.map((image: string, index) => (
        <SwiperSlide key={index}>
            <img src={image} alt="Hình ảnh cơ sở vật chất" />
        </SwiperSlide>
    ));

    const categories: string[] = [];

    // Get array of keys on category
    const categoryKeys = Object.keys(category);

    categoriesWithKey.forEach((item: any) => {
        if (categoryKeys.includes(item.key)) categories.push(item.category);
    });

    return (
        <article className={style.overview}>
            <HeaderText heading="Giới thiệu chung" desc="Tổng quan về trường" />
            <p>{overview.description}</p>
            <hr className={style.hr} />
            <HeaderText
                heading="Phạm vi giảng dạy"
                desc="Khối ngành, quy mô, chương trình,..."
            />
            <ul>
                <li>
                    <ListTile
                        icon={faUserGraduate}
                        heading="Đối tượng đào tạo"
                        info={overview.subjectOfEducation}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faBriefcase}
                        heading="Khối ngành"
                        info={categories}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faSchool}
                        heading="Chương trình đào tạo"
                        info={overview.programs}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faCalendarDay}
                        heading="Thời gian nhập học"
                        info={overview.entryMonth}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faClock}
                        heading="Thời gian đào tạo"
                        info={overview.studyTime}
                    />
                </li>
            </ul>
            <hr className={style.hr} />
            <HeaderText
                heading="Cơ sở vật chất"
                desc="Điều kiện cơ sở vật chất tại trường"
            />
            <ul>
                <li>
                    <ListTile
                        icon={faMap}
                        heading="Cơ sở"
                        info={facility.branches}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faLandmark}
                        heading="Quy mô"
                        info={[facility.scaleOfOperation]}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faBuilding}
                        heading="Cơ sở vật chất hỗ trợ"
                        info={facility.supportingFacility}
                    />
                </li>
                <li>
                    <ListTile
                        icon={faFlask}
                        heading="Phòng thí nghiệm"
                        info={facility.labs}
                    />
                </li>
            </ul>
            <Subheader
                heading="Hình ảnh về trường"
                desc="Một số hình ảnh về cơ sở vật chất của trường"
            />
            <section className={style.carousel}>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={20}
                >
                    {imageCarousel}
                </Swiper>
            </section>
            <hr className={style.hr} />
        </article>
    );
};

export default SchoolOverview;
