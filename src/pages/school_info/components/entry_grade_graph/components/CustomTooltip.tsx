import style from "./CustomTooltip.module.scss";

const classifyDataType = (label: string) => {
    return "Điểm";
};

const classifyPayloadType = (label: string) => {
    if (label === "thptqg") {
        return 0;
    } else if (label === "dgnl") {
        return 1;
    } else if (label === "xthb") {
        return 2;
    }
    return 0;
};

const CustomTooltip: React.FC<any> = (props) => {
    if (props.active) {
        console.log(props);
        return (
            <div className={style.tooltip}>
                {props.payload.map((line: any) => {
                    return (
                        <div className={style["tooltip-content"]}>
                            <p
                                style={{
                                    color: line.stroke,
                                    fontWeight: "bold",
                                }}
                            >
                                {line.name}
                            </p>
                            <p className={style.score}>
                                {line.payload[line.name]}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
