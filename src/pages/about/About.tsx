import style from "./About.module.scss";

import { ReactComponent as GraduationSVG } from "../../assets/svg/graduation.svg";
import { ReactComponent as CertificateSVG } from "../../assets/svg/certificate.svg";
import { ReactComponent as OmegaSVG } from "../../assets/svg/omega.svg";
import { Button } from "react-bootstrap";

import { useHistory } from "react-router";

const About = () => {
	const history = useHistory();

	return (
		<div className={style.about}>
			<div className={style.intro}>
				<div className={style.title}>
					<h1>Uniify đồng hành cùng học sinh</h1>
					<p className="mt-3">
						Uniify hỗ trợ các học sinh cuối cấp tại Việt Nam tiếp
						cận dễ dàng hơn với môi trường Đại học bằng việc cung
						cấp những dịch vụ hữu ích, mang tính cộng đồng.
					</p>
					<p>
						Các dịch vụ của Uniify được hỗ trợ về mặt kinh phí bởi
						các trường Đại học và tổ chức giáo dục uy tín, các doanh
						nghiệp trên khắp Việt Nam với mục tiêu hướng đến việc
						các học sinh được tiếp cận với nền giáo dục cao một cách
						thuận tiện
					</p>
				</div>
				<div className={style.svg}>
					<GraduationSVG />
				</div>
			</div>
			<div className={style.intro}>
				<div className={style.svg}>
					<OmegaSVG />
				</div>
				<div className={style.title}>
					<h1>Uniify cùng học sinh định hướng tương lai</h1>
					<p className="mt-3">
						Các bạn học sinh trên toàn quốc có thể tìm cho mình ngôi
						trường Đại học trong nước phù hợp với nguyện vọng bản
						thân và định hướng nghề nghiệp thông qua những dịch vụ
						trực tuyến và giải pháp hữu ích của Uniify, được thiết
						kế với sự dễ dàng của người dùng được đặt lên hàng đầu,
						nhằm giảm bớt thời gian nghiên cứu thông và tăng thời
						gian học tập cũng như ôn thi.
					</p>
					<p>
						Uniify được tích hợp và duy trì trong sự hợp tác giữa
						các trường Đại học để đảm bảo những thông tin luôn được
						cập nhật thường xuyên và liên tục. Những thông tin được
						viết trên từng trang của Uniify là những thông tin tức
						thời, mới nhất.
					</p>
				</div>
			</div>
			<div className={style.intro}>
				<div className={style.title}>
					<h1>Xét tuyển Đại học cùng Uniify</h1>
					<p className="mt-3">
						Uniify làm việc với các trường Đại học để cung cấp những
						phương án tuyển sinh phù hợp, thuận tiện và công bằng
						với tất cả các bạn học sinh. Hệ thống của Uniify được
						xây dựng chặt chẽ, để quy trình tuyển sinh của các học
						sinh trở nên nhanh chóng và trơn tru. Tuyển sinh Đại học
						nay chỉ đơn giản tựa như một cú nhấp!
					</p>
					<p>
						Uniify sẽ luôn cập nhật những tính năng mới và liên kết
						chặt chẽ với hệ thống tuyển sinh của các trường Đại học
						trong nước để duy trì sự thuận tiện cũng như công bằng
						cho tất cả người dùng. Những công nghệ tiên tiến về dữ
						liệu và trí tuệ nhân tạo được sử dụng để mang lại trải
						nghiệm tuyệt vời nhất cho cả các trường học và học sinh.
					</p>
				</div>
				<div className={style.svg}>
					<CertificateSVG />
				</div>
			</div>
			<div className={style.cta}>
				<h1>Hãy tham gia Uniify ngay bây giờ!</h1>
				<div>
					<Button variant="warning" className="mt-3 me-3" size="lg" onClick={() => {
						history.push("/explore");
					}} >
						Khám phá ngay
					</Button>
					<Button variant="outline-warning" className="mt-3" size="lg" onClick={() => {
						history.push("/auth/register");
					}}>
						Đăng ký luôn
					</Button>
				</div>
			</div>
		</div>
	);
};

export default About;
