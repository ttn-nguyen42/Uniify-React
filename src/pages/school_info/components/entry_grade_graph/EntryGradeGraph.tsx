import Subheader from "../../../../components/header/subheader/Subheader";
import style from "./EntryGradeGraph.module.scss";

import CustomTooltip from "./components/CustomTooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { FC, ReactElement } from "react";

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { MajorSchema } from "../../../../util/schema/DatabaseSchema";
import { SchoolGradeGraphProps } from "../../../../util/types/Interface";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";
import { transformGradeData } from "../../../../util/ultility/UtilityFunctions";

import { colorCodes } from "../../../../util/default/DefaultOptions";

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
};

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
};

SwiperCore.use([Navigation]);

const EntryGradeGraph: FC<SchoolGradeGraphProps> = (props) => {
    const { major } = props;

    const currentNavigatorState = useSelector(
        (state: RootState) => state.schoolInfoNavigator
    );

    const charts: ReactElement[] = [];

    if (currentNavigatorState.currentMajor.length !== 0) {
        const currentMajor = currentNavigatorState.currentMajor;
        const foundMajorData = major.list.find(
            (data: MajorSchema) => data.major === currentMajor
        );
        const foundGradeData = foundMajorData!.gradeData;
        const transformedData = transformGradeData(foundGradeData);
        // Each method, generate a chart
        for (const [key, value] of Object.entries(transformedData)) {
            // Get array of keys
            const arrayOfKeys = Object.keys(value[0]);
            const filteredArrayOfKeys = arrayOfKeys.filter(
                (dataKey: string) => dataKey !== "year"
            );
            charts.push(
                <SwiperSlide>
                    <div className={style["chart-heading"]}>
                        <h4>{`Điểm ${classifyChartType(key)}`}</h4>
                        <p>
                            Điểm đầu vào của ngành{" "}
                            {currentNavigatorState.currentMajor} qua các năm
                        </p>
                    </div>
                    <ResponsiveContainer width={"100%"} aspect={3}>
                        <LineChart data={value} margin={{ left: 0, right: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis domain={classifyChartDomain(key)} />
                            <Tooltip content={<CustomTooltip />} />
                            {filteredArrayOfKeys.map(
                                (dataKey: string, index: number) => {
                                    return (
                                        <Line
                                            dataKey={dataKey}
                                            stroke={colorCodes[index]}
                                            strokeWidth={"2px"}
                                            type={"monotone"}
                                        />
                                    );
                                }
                            )}
                        </LineChart>
                    </ResponsiveContainer>
                </SwiperSlide>
            );
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
        </section>
    );
};

export default EntryGradeGraph;
