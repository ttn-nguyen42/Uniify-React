import style from "./MajorPill.module.scss";

interface MajorPillProps {
    major: string;
}

const MajorPill: React.FC<MajorPillProps> = (props) => {
    return <div className={style.pill}>{props.major}</div>;
};

export default MajorPill;
