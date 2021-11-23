import { FC, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import CompletedCheckmark from "../../../../../../components/completed_checkmark/CompletedCheckmark";
import { ApplyModalContentProps } from "../../../../../../util/types/Interface";

import style from "./ApplyModalContent.module.scss";

const classifyCompletedState = (arg: any) => {
	if (arg === undefined || arg === null) return false;
	if (arg === false) return false;
	return true;
};

const ApplyModalContent: FC<ApplyModalContentProps> = (props) => {
	const { userId, schoolId, userData, apply, selectedMethod } = props;

	const [check, updateCheckStatus] = useState<boolean>(false);

    const submitHandler = () => {
        apply(selectedMethod, userData, schoolId, userId);
    };

	return (
		<div>
			{selectedMethod === "Ưu tiên xét tuyển của ĐHQG TP.HCM" && (
				<section className={style.content}>
					<p>Các thông tin cần có</p>
					<div className={style.check}>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.personalInfo
							)}
							message={"Thông tin cá nhân"}
						/>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.certificates.grade
							)}
							message={"Học bạ cấp 3"}
						/>
					</div>
					<Alert
						variant={
							classifyCompletedState(userData.personalInfo) &&
							classifyCompletedState(userData.certificates.grade)
								? "success"
								: "danger"
						}
					>
						{classifyCompletedState(userData.personalInfo) &&
							classifyCompletedState(
								userData.certificates.grade
							) &&
							"Đã đủ các thông tin cần có"}
						{(!classifyCompletedState(userData.personalInfo) ||
							!classifyCompletedState(
								userData.certificates.grade
							)) &&
							"Vui lòng cập nhật thêm các thông tin còn thiếu"}
					</Alert>
					<Form>
						<Form.Group className="mb-3">
							<Form.Check
								checked={check}
								onChange={() =>
									updateCheckStatus((prev: boolean) => !prev)
								}
								type="checkbox"
								label="Tôi đồng ý với các điều khoản của ứng dụng"
							/>
						</Form.Group>
					</Form>
					<Button
						variant="success"
						disabled={
							!(
								classifyCompletedState(userData.personalInfo) &&
								classifyCompletedState(
									userData.certificates.grade
								)
							)
						}
						onClick={submitHandler}
					>
						Nộp hồ sơ
					</Button>
				</section>
			)}
			{selectedMethod === "Theo thể thức riêng (Có)" && (
				<section className={style.custom}>
					<p>
						Vui lòng theo dõi thông tin trên trang web của nhà
						trường
					</p>
				</section>
			)}
			{selectedMethod === "Xét tuyển hồ sơ cùng chứng chỉ IELTS" && (
				<section className={style.content}>
					<p>Các thông tin cần có</p>
					<div className={style.check}>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.personalInfo
							)}
							message={"Thông tin cá nhân"}
						/>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.certificates.grade
							)}
							message={"Học bạ"}
						/>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.certificates.language
							)}
							message={"Chứng chỉ ngoại ngữ"}
						/>
					</div>
					<Alert
						variant={
							classifyCompletedState(userData.personalInfo) &&
							classifyCompletedState(
								userData.certificates.grade
							) &&
							classifyCompletedState(
								userData.certificates.language
							)
								? "success"
								: "danger"
						}
					>
						{classifyCompletedState(userData.personalInfo) &&
							classifyCompletedState(
								userData.certificates.grade
							) &&
							classifyCompletedState(
								userData.certificates.language
							) &&
							"Đã đủ các thông tin cần có"}
						{!classifyCompletedState(userData.personalInfo) ||
							!classifyCompletedState(
								userData.certificates.grade
							) ||
							(!classifyCompletedState(
								userData.certificates.language
							) &&
								"Vui lòng cập nhật thêm các thông tin còn thiếu")}
					</Alert>
					<Form>
						<Form.Group className="mb-3">
							<Form.Check
								checked={check}
								onChange={() =>
									updateCheckStatus((prev: boolean) => !prev)
								}
								type="checkbox"
								label="Tôi đồng ý với các điều khoản của ứng dụng"
							/>
						</Form.Group>
					</Form>
					<Button
						variant="success"
						disabled={
							!(
								classifyCompletedState(userData.personalInfo) &&
								classifyCompletedState(
									userData.certificates.grade
								) &&
								classifyCompletedState(
									userData.certificates.language
								)
							)
						}
						onClick={submitHandler}
					>
						Nộp hồ sơ
					</Button>
				</section>
			)}
			{selectedMethod === "Xét tuyển bằng chứng chỉ quốc tế" && (
				<section className={style.content}>
					<p>Các thông tin cần có</p>
					<div className={style.check}>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.personalInfo
							)}
							message={"Thông tin cá nhân"}
						/>
						<CompletedCheckmark
							completed={classifyCompletedState(
								userData.certificates.education
							)}
							message={"Chứng chỉ quốc tế"}
						/>
					</div>
					<Alert
						variant={
							classifyCompletedState(userData.personalInfo) &&
							classifyCompletedState(
								userData.certificates.education
							)
								? "success"
								: "danger"
						}
					>
						{classifyCompletedState(userData.personalInfo) &&
							classifyCompletedState(
								userData.certificates.education
							) &&
							"Đã đủ các thông tin cần có"}
						{!classifyCompletedState(userData.personalInfo) ||
							(!classifyCompletedState(
								userData.certificates.education
							) &&
								"Vui lòng cập nhật thêm các thông tin còn thiếu")}
					</Alert>
					<Form>
						<Form.Group className="mb-3">
							<Form.Check
								checked={check}
								onChange={() =>
									updateCheckStatus((prev: boolean) => !prev)
								}
								type="checkbox"
								label="Tôi đồng ý với các điều khoản của ứng dụng"
							/>
						</Form.Group>
					</Form>
					<Button
						variant="success"
						disabled={
							!(
								classifyCompletedState(userData.personalInfo) &&
								classifyCompletedState(
									userData.certificates.education
								)
							)
						}
						onClick={submitHandler}
					>
						Nộp hồ sơ
					</Button>
				</section>
			)}
		</div>
	);
};

export default ApplyModalContent;
