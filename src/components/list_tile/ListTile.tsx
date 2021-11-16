import style from "./ListTile.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ListTileProps {
    heading: string;
    info: string[];
    icon: IconProp;
}

const ListTile: React.FC<ListTileProps> = (props) => {
    return (
        <div className={style.positioning}>
            <div className={style["icon-container"]}>
                <FontAwesomeIcon icon={props.icon} size={"2x"} />
            </div>
            <div className={style.content}>
                <h4>{props.heading}</h4>
                {props.info.map((info: string, index) => (
                    <span key={index}>{info}</span>
                ))}
            </div>
        </div>
    );
};

export default ListTile;
