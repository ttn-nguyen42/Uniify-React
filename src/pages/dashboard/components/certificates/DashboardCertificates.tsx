import style from "./DashboardCertificates.module.scss";

import { DashboardContentProps } from "../../../../util/types/Interface";
import { FC, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import { FirestoreApp } from "../../../../util/api/Firebase";
import { doc, updateDoc } from "firebase/firestore";

const DashboardCertificates: FC<DashboardContentProps> = (props) => {
	const { info } = props;
	const [language, updateLanguageFiles] = useState<any>();
	const [education, updateEducationFiles] = useState<any>();
	const [grade, updateGradeFiles] = useState<any>();

	const [isLoading, setLoadingState] = useState<boolean>(false);
	const [hasError, setErrorStatus] = useState<boolean | null>(null);

	const submitHandler = async (event: any) => {
		event.preventDefault();
		setLoadingState(true);
		setErrorStatus(null);
		try {
			const documentRef = doc(FirestoreApp, "userdata", info.userId);
			await updateDoc(documentRef, {
				certificates: {
					language: {
						ielts: 7.5,
						toefl: 1100,
					},
					education: {
						alevel: "A",
						sat: 1500,
					},
					grade: true,
				},
			});
			setErrorStatus(false);
		} catch (error) {
			alert("Đã có lỗi xảy ra, vui lòng thử lại");
			setErrorStatus(true);
		}
		updateEducationFiles(undefined);
		updateGradeFiles(undefined);
		updateLanguageFiles(undefined);
		setLoadingState(false);
	};

	return (
		<div className={style.certificates}>
			{isLoading && (
				<div className={style.loading}>
					<Spinner animation="grow" variant="warning" />
				</div>
			)}
			{hasError === false && (
				<Alert variant="success">Cập nhật thông tin thành công</Alert>
			)}
			{hasError === true && (
				<Alert variant="danger">
					Cập nhật không tin không thành công, vui lòng thử lại
				</Alert>
			)}
			{!isLoading && (
				<Form onSubmit={submitHandler}>
					<Form.Group className="mb-3">
						<Form.Label>Chứng chỉ ngoại ngữ</Form.Label>
						<Form.Control
							type="file"
							multiple
							onChange={(event: any) =>
								updateLanguageFiles(event.target.files[0])
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Chứng chỉ học tập quốc tế</Form.Label>
						<Form.Control
							type="file"
							multiple
							onChange={(event: any) =>
								updateEducationFiles(event.target.files[0])
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Bảng điểm học bạ</Form.Label>
						<Form.Control
							type="file"
							multiple
							onChange={(event: any) =>
								updateGradeFiles(event.target.files[0])
							}
						/>
					</Form.Group>
					<div className={style.submit}>
						<Button
							variant="success"
							disabled={
								!(
									language !== undefined ||
									education !== undefined ||
									grade !== undefined
								)
							}
							type="submit"
						>
							Lưu
						</Button>
					</div>
				</Form>
			)}
		</div>
	);
};

export default DashboardCertificates;
