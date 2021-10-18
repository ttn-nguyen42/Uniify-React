import HeaderText from "../../../../components/header/HeaderText";
import Subheader from "../../../../components/header/subheader/Subheader";
import ListTile from "../../../../components/list_tile/ListTile";

import {
	faUserGraduate,
	faBriefcase,
	faSchool,
	faCalendarDay,
	faDoorOpen,
	faClock,
	faMap,
	faLandmark,
	faBuilding,
	faFlask,
} from "@fortawesome/free-solid-svg-icons";

import style from "./SchoolOverview.module.scss";

import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

const SchoolOverview = () => {
	const imageArray = [
		"https://via.placeholder.com/1280x720",
		"https://via.placeholder.com/1280x720",
		"https://via.placeholder.com/1280x720",
		"https://via.placeholder.com/1280x720",
		"https://via.placeholder.com/1280x720",
	];

	const imageCarousel = imageArray.map((image: string) => (
		<SwiperSlide>
			<img src={image} alt="HCMUT" />
		</SwiperSlide>
	));
    
	return (
		<article className={style.overview}>
			<HeaderText heading="Giới thiệu chung" desc="Tổng quan về trường" />
			<p>
				Trường Đại học Bách khoa (Ho Chi Minh City University of
				Technology) là trường đại học chuyên ngành kỹ thuật lớn của Việt
				Nam, thành viên của hệ thống Đại học Quốc gia, được xếp vào nhóm
				đại học trọng điểm quốc gia Việt Nam. Tiền thân là Trung tâm Kỹ
				thuật Quốc gia được thành lập từ năm 1957, đến ngày 27/10/1976,
				Thủ tướng Phạm Văn Đồng ký Quyết định số 426/TTg đổi tên trường
				Đại học Kỹ thuật Phú Thọ thành trường Đại học Bách Khoa TP. Hồ
				Chí Minh.
			</p>
			<hr className={style.hr} />
			<HeaderText
				heading="Phạm vi giảng dạy"
				desc="Khối ngành, quy mô, chương trình,..."
			/>
			<ul>
				<li>
					<ListTile
						icon={faUserGraduate}
						heading="Đối tượng đào tạo"
						info={["Đại học", "Sau đại học"]}
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
				<li>
					<ListTile
						icon={faSchool}
						heading="Chương trình đào tạo"
						info={[
							"Đại trà",
							"Tiên tiến",
							"Chất lượng cao",
							"Liên kết quốc tế",
						]}
					/>
				</li>
				<li>
					<ListTile
						icon={faCalendarDay}
						heading="Thời gian nhập học"
						info={["Tháng 9"]}
					/>
				</li>
				<li>
					<ListTile
						icon={faDoorOpen}
						heading="Phương thức tuyển sinh"
						info={[
							"Điểm thi THPTQG",
							"Ưu tiên xét tuyển",
							"Đánh giá năng lực",
						]}
					/>
				</li>
				<li>
					<ListTile
						icon={faClock}
						heading="Thời gian đào tạo"
						info={["4 năm", "5 năm"]}
					/>
				</li>
			</ul>
			<hr className={style.hr} />
			<HeaderText
				heading="Cơ sở vật chất"
				desc="Điều kiện cơ sở vật chất tại trường"
			/>
			<ul>
				<li>
					<ListTile
						icon={faMap}
						heading="Cơ sở"
						info={["Quận 10", "Khu đô thị Đại học Quốc gia"]}
					/>
				</li>
				<li>
					<ListTile
						icon={faLandmark}
						heading="Quy mô"
						info={["41,23 ha (2 cơ sở)"]}
					/>
				</li>
				<li>
					<ListTile
						icon={faBuilding}
						heading="Cơ sở vật chất hỗ trợ"
						info={[
							"Ký túc xá",
							"Sân bóng đá",
							"Sân bóng rổ",
							"Sân cầu lông",
							"CircleK",
						]}
					/>
				</li>
				<li>
					<ListTile
						icon={faFlask}
						heading="Phòng thí nghiệm"
						info={[
							"Hóa học",
							"Vật lý",
							"Máy tính",
							"Cơ khí",
							"Điện",
							"Điện tử",
							"Xây dựng",
						]}
					/>
				</li>
			</ul>
			<Subheader
				heading="Hình ảnh về trường"
				desc="Một số hình ảnh về cơ sở vật chất của trường"
			/>
			<section className={style.carousel}>
				<Swiper
					direction={"vertical"}
					slidesPerView={1}
					mousewheel={true}
					pagination={{
						clickable: true,
					}}
					spaceBetween={20}
				>
					{imageCarousel}
				</Swiper>
			</section>
            <hr className={style.hr} />
		</article>
	);
};

export default SchoolOverview;
