import React, { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CompletedCheckmark from "../../../../../../components/completed_checkmark/CompletedCheckmark";
import { ApplyModalContentProps } from "../../../../../../util/types/Interface";

import style from "./ApplyModalContent.module.scss";

const classifyCompletedState = (arg: any) => {
	if (arg === undefined || arg === null) return false;
	if (arg === false) return false;
	return true;
};

const ApplyModalContent: FC<ApplyModalContentProps> = (props) => {
	const { userId, schoolId, userData, apply, selectedMethod, schoolData } =
		props;

	const [check, updateCheckStatus] = useState<boolean>(false);
	const [select, updateSelectOption] = useState<string>("");
	const [select2, updateSelectOption2] = useState<string>("");
	const [select3, updateSelectOption3] = useState<string>("");
	const [select4, updateSelectOption4] = useState<string>("");
	const [select5, updateSelectOption5] = useState<string>("");

	const submitHandler = () => {
		apply(
			selectedMethod,
			userData,
			schoolId,
			userId,
			[select, select2, select3, select4, select5],
			schoolData
		);
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
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Nguyện vọng 1</Form.Label>
							<Form.Select
								value={select}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 2</Form.Label>
							<Form.Select
								value={select2}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption2(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 3</Form.Label>
							<Form.Select
								value={select3}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption3(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 4</Form.Label>
							<Form.Select
								value={select4}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption4(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 5</Form.Label>
							<Form.Select
								value={select5}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption5(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
						</Form.Group>
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
						variant="warning"
						disabled={
							!(
								classifyCompletedState(userData.personalInfo) &&
								classifyCompletedState(
									userData.certificates.grade
								) &&
								check &&
								select.length !== 0
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
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Nguyện vọng 1</Form.Label>
							<Form.Select
								value={select}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 2</Form.Label>
							<Form.Select
								value={select2}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption2(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 3</Form.Label>
							<Form.Select
								value={select3}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption3(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 4</Form.Label>
							<Form.Select
								value={select4}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption4(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 5</Form.Label>
							<Form.Select
								value={select5}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption5(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
						</Form.Group>
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
						variant="warning"
						disabled={
							!(
								classifyCompletedState(userData.personalInfo) &&
								classifyCompletedState(
									userData.certificates.grade
								) &&
								classifyCompletedState(
									userData.certificates.language
								) &&
								check &&
								select.length !== 0
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
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Nguyện vọng 1</Form.Label>
							<Form.Select
								value={select}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 2</Form.Label>
							<Form.Select
								value={select2}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption2(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 3</Form.Label>
							<Form.Select
								value={select3}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption3(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 4</Form.Label>
							<Form.Select
								value={select4}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption4(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
							<Form.Label>Nguyện vọng 5</Form.Label>
							<Form.Select
								value={select5}
								onChange={(
									event: React.ChangeEvent<HTMLSelectElement>
								) => {
									updateSelectOption5(event.target.value);
								}}
							>
								{["", ...schoolData.major.allMajorList].map(
									(maj: string, index) => (
										<option value={maj} key={index}>
											{maj}
										</option>
									)
								)}
							</Form.Select>
						</Form.Group>
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
						variant="warning"
						disabled={
							!(
								classifyCompletedState(userData.personalInfo) &&
								classifyCompletedState(
									userData.certificates.education
								) &&
								check &&
								select.length !== 0
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
