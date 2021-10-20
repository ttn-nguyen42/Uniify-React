import HeaderText from "../../../../components/header/header_text/HeaderText";
import Subheader from "../../../../components/header/subheader/Subheader";
import MajorPill from "../../../../components/cards/major_pill/MajorPill";

import style from "./MajorList.module.scss";

const MajorList = () => {
    return (
        <section className={style.major}>
            <HeaderText
                className={style.header}
                heading="Thông tin tuyển sinh"
                desc="Các thông tin dành cho học sinh cho việc tuyển sinh"
            />
            <Subheader
                heading="Ngành học"
                desc="Các ngành học đang được giảng dạy tại trường"
            />
            <div className={style.list}>
                <MajorPill major="Khoa học máy tính" />
                <MajorPill major="Kỹ thuật xây dựng" />
                <MajorPill major="Quản lý công nghiệp" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
                <MajorPill major="Kỹ thuật sinh học" />
            </div>
        </section>
    );
};

export default MajorList;
