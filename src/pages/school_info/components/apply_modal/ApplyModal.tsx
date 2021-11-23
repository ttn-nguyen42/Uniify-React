import { FC, Fragment, useEffect, useState } from "react";
import { ApplyModalProps } from "../../../../util/types/Interface";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import style from "./ApplyModal.module.scss";
import { doc, getDoc } from "firebase/firestore";
import { FirestoreApp } from "../../../../util/api/Firebase";
import ApplyModalNav from "./components/navbar/ApplyModalNav";
import ApplyModalContent from "./components/content/ApplyModalContent";

const ApplyModal: FC<ApplyModalProps> = (props) => {
	const { isShowing, toggle, userId, schoolId } = props;

	const [data, updateData] = useState<any>();
	const [schoolData, updateSchoolData] = useState<any>();
	const [hasError, updateError] = useState<boolean>(false);
	const [isLoading, updateLoadingStatus] = useState<boolean>(false);

	const [selectedMethod, updateSelectedMethod] = useState<string | null>(
		null
	);

	useEffect(() => {
		updateError(false);
		updateLoadingStatus(true);
		const retrieveData = async () => {
			try {
				const documentRef = doc(FirestoreApp, "userdata", userId!);
				const documentQueryResult = await getDoc(documentRef);
				if (documentQueryResult.exists()) {
					updateData(documentQueryResult.data());
					console.log(documentQueryResult.data());
				} else {
					updateData(null);
					throw Error;
				}
			} catch (error) {
				updateError(true);
			}
		};
		const retrieveSchoolData = async () => {
			try {
				const schoolDocumentRef = doc(
					FirestoreApp,
					"schooldata",
					schoolId
				);
				const schoolDocument = await getDoc(schoolDocumentRef);
				if (schoolDocument.exists()) {
					updateSchoolData(schoolDocument.data());
					console.log(schoolDocument.data());
				} else {
					updateSchoolData(null);
					throw Error;
				}
			} catch (error) {
				updateError(true);
			}
		};
		retrieveData();
		retrieveSchoolData();
		updateLoadingStatus(false);
	}, [userId, schoolId]);

	const selectMethod = (method: string | null) => {
		if (method !== selectedMethod) {
			updateSelectedMethod(method);
			console.log(method);
		}
	};

	const applyHandler = async (
		method: string,
		userData: any,
		schoolId: string,
		userId: string
	) => {
		const documentRef = doc(FirestoreApp, "applicationdata", schoolId);
		console.log(method + userData + schoolId + userId);
	};

	return (
		<Fragment>
			<Modal
				show={isShowing}
				onHide={toggle}
				backdrop="static"
				keyboard={false}
				size="xl"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Nộp hồ sơ trực tuyến</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{hasError && <p> Đã có lỗi xảy ra, vui lòng thử lại</p>}
					{!isLoading &&
						schoolData !== undefined &&
						schoolData !== null && (
							<section className={style.body}>
								{schoolData.admission.xths !== undefined && (
									<ApplyModalNav
										data={schoolData}
										selectedMethod={selectedMethod}
										selectMethod={selectMethod}
									/>
								)}
								{schoolData.admission.xths !== undefined &&
									selectedMethod !== null &&
									data !== undefined &&
									data !== null && (
										<ApplyModalContent
											selectedMethod={selectedMethod}
											schoolId={schoolId}
											userId={userId!}
											userData={data}
											apply={applyHandler}
										/>
									)}
								{selectedMethod === null && (
									<p className={style["not-chosen"]}>
										Bạn chưa chọn phương án nào
									</p>
								)}
								{schoolData.admission.xths === undefined && (
									<p>
										Trường không hỗ trợ tuyển sinh trực
										tuyến
									</p>
								)}
							</section>
						)}
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};

export default ApplyModal;
