import style from "./CustomTooltip.module.scss";

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
