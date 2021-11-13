import HeaderText from "../../../../components/header/header_text/HeaderText";
import Subheader from "../../../../components/header/subheader/Subheader";
import MajorPill from "../../../../components/cards/major_pill/MajorPill";

import style from "./MajorList.module.scss";

import { FC } from "react";
import { SchoolMajorListProps } from "../../../../util/types/Interface";

import { useDispatch } from "react-redux";
import { updateMajor } from "../../../../util/state/slice/schoolInfoSlice";

const MajorList: FC<SchoolMajorListProps> = (props) => {
    const dispatch = useDispatch();

    const pillClick = (major: string) => {
        dispatch(updateMajor(major));
    };

    const { major } = props;
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
                {major.allMajorList.map((majorItem: string) => (
                    <MajorPill major={majorItem} onClick={pillClick} />
                ))}
            </div>
        </section>
    );
};

export default MajorList;
