import style from "./Subheader.module.scss";

interface SubheaderProps {
    heading: string;
    desc: string;
    className?: string;
}

const Subheader: React.FC<SubheaderProps> = (props) => {
    return (
        <section className={`${style.header} ${props.className}`}>
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </section>
    );
};

export default Subheader;
