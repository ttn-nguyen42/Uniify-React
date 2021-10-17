import style from "./School.module.scss";

import SchoolHeader from "./components/school_header/SchoolHeader";
import SchoolGallery from "./components/school_gallery/SchoolGallery";
import HeaderText from "../../components/header/HeaderText";
import ListTile from "../../components/list_tile/ListTile";

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const SchoolInfo = () => {
	// const params = useParams<InfoParams>();
	// const { id, category, location } = params;
	// Retrieve data with params later

	return (
		<div className={style.info}>
			<SchoolHeader />
			<SchoolGallery />
			<section className={style.body}>
				<article className={style.overview}>
					<HeaderText
						heading="Giới thiệu chung"
						desc="Tổng quan về trường"
					/>
					<p>
						Trường Đại học Bách khoa (Ho Chi Minh City University of
						Technology) là trường đại học chuyên ngành kỹ thuật lớn
						của Việt Nam, thành viên của hệ thống Đại học Quốc gia,
						được xếp vào nhóm đại học trọng điểm quốc gia Việt Nam.
						Tiền thân là Trung tâm Kỹ thuật Quốc gia được thành lập
						từ năm 1957, đến ngày 27/10/1976, Thủ tướng Phạm Văn
						Đồng ký Quyết định số 426/TTg đổi tên trường Đại học Kỹ
						thuật Phú Thọ thành trường Đại học Bách Khoa TP. Hồ Chí
						Minh.
					</p>
					<hr />
					<HeaderText
						heading="Phạm vi giảng dạy"
						desc="Khối ngành, quy mô, chương trình,..."
					/>
					<ul>
						<li>
							<ListTile
								icon={faUserGraduate}
								heading="Đối tượng đào tạo"
								info={["Đại học và Sau đại học"]}
							/>
						</li>
						<li>
							<ListTile
								icon={faBriefcase}
								heading="Khối ngành"
								info={[
									"Khoa học cơ bản",
									"Kiến trúc và xây dựng",
									"Công nghệ thông tin",
									"Sản xuất và chế biến",
								]}
							/>
						</li>
					</ul>
				</article>
				<div className={style.register}></div>
			</section>
			<section className={style.graph}></section>
			<section className={style.map}></section>
			<section className={style.comment}></section>
		</div>
	);
};

export default SchoolInfo;
