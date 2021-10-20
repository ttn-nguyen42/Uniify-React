import style from "./HeaderText.module.scss";

interface HeaderTextProps {
    heading: string;
    desc: string;
    className?: string;
}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
    return (
        <section className={`${style.header} ${props.className}`}>
            <h2>{props.heading}</h2>
            <p>{props.desc}</p>
        </section>
    );
};

export default HeaderText;
