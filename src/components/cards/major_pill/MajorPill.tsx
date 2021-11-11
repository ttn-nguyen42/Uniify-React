import style from "./MajorPill.module.scss";

import { MajorPillProps } from "../../../util/types/Interface";

const MajorPill: React.FC<MajorPillProps> = (props) => {
    const onClick = () => {
        props.onClick(props.major);
    };

    return (
        <div className={`${style.pill} bg-warning`} onClick={onClick}>
            {props.major}
        </div>
    );
};

export default MajorPill;
