import Subheader from "../../../../components/header/subheader/Subheader";
import style from "./EntryGradeGraph.module.scss";

import CustomTooltip from "./components/CustomTooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { ReactElement } from "react";

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    CartesianGrid,
} from "recharts";

import { GradeDataSchema } from "../../../../util/types/Type";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const dummyData: GradeDataSchema[] = [
    { year: "2016", thptqg: 26, dgnl: 1200 },
    { year: "2017", thptqg: 27, dgnl: 1300 },
    { year: "2018", thptqg: 25, dgnl: 1000 },
    { year: "2019", thptqg: 26, dgnl: 900 },
    { year: "2020", thptqg: 25, dgnl: 1200 },
    { year: "2021", thptqg: 29, dgnl: 1400 },
];

const classifyChartType = (chart: string) => {
    if (chart === "thptqg") {
        return "thi THPTQG";
    } else if (chart === "dgnl") {
        return "thi Đánh giá năng lực";
    } else if (chart === "xths") {
        return "xét tuyển hồ sơ học tập";
    } else {
        return "đầu vào";
    }
}

const classifyChartDomain = (chart: string) => {
    if (chart === "thptqg") {
        return ["dataMin - 2", "dataMax + 2"] as const;
    } else if (chart === "dgnl") {
        return ["dataMin - 100", "dataMax + 100"] as const;
    } else if (chart === "xths") {
        return ["dataMin - 2", "dataMax + 2"] as const;
    } else {
        return [0, "dataMax + 10"] as const;
    }
}



SwiperCore.use([Navigation]);

const EntryGradeGraph = () => {

    const charts: ReactElement[] = [];


    for (const [key] of Object.entries(dummyData[0])) {
        if (key === "year") {

        } else {
            const type = classifyChartType(key);
            const domain = classifyChartDomain(key);
            console.log(key);
            charts.push(
                <SwiperSlide>
                    <div className={style["chart-heading"]}>
                        <h4>{`Điểm ${type}`}</h4>
                        <p>Điểm đầu vào của ngành Khoa học Máy tính qua các năm</p>
                    </div>
                    <ResponsiveContainer width={"100%"} aspect={3}>
                        <LineChart data={dummyData} margin={{ left: 0, right: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis domain={domain} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                dataKey={key}
                                stroke="orange"
                                strokeWidth={"5px"}
                                type={"monotone"}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </SwiperSlide>
            )
        }
    }

    return (
        <section className={style.graph}>
            <Subheader
                heading="Điểm đầu vào các năm"
                desc="Bấm vào ngành muốn xem ở trên để xem được điểm đầu vào các năm"
            />
            <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={20}
                className="mySwiper"
            >
                {charts}
            </Swiper>
        </section >
    );
};

export default EntryGradeGraph;
