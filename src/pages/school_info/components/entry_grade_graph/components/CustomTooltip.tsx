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
        return (
            <div className={style.tooltip}>
                <span>
                    <b>{classifyDataType(props.label)}</b>
                    {`: ${props.payload[
                        classifyPayloadType(props.label)
                    ].value.toFixed(2)}`}
                </span>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
