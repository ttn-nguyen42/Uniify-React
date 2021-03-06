import { FC, Fragment, useEffect, useState } from "react";
import { ApplyModalProps } from "../../../../util/types/Interface";

import Modal from "react-bootstrap/Modal";

import style from "./ApplyModal.module.scss";
import { arrayUnion, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
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
		}
	};

	const applyHandler = async (
		method: string,
		userData: any,
		schid: string,
		uid: string,
		selectedMajor: string[]
	) => {
		try {
			const schoolDocumentRef = doc(
				FirestoreApp,
				"applicationdata",
				schid
			);
			const userDocumentRef = doc(FirestoreApp, "userdata", uid);
			const schoolDocumentQuery = await getDoc(schoolDocumentRef);
			const userDocumentQuery = await getDoc(userDocumentRef);
			const majorFiltered = Array.from(new Set(selectedMajor));
			if (schoolDocumentQuery.exists()) {
				await updateDoc(schoolDocumentRef, {
					applications: arrayUnion({
						studentId: uid,
						userData: userData,
						selectedMajor: majorFiltered,
						method: method,
						status: false,
					}),
				});
			} else {
				await setDoc(schoolDocumentRef, {
					applications: arrayUnion({
						studentId: uid,
						userData: userData,
						selectedMajor: majorFiltered,
						method: method,
						status: false,
					}),
				});
			}
			if (userDocumentQuery.exists()) {
				await updateDoc(userDocumentRef, {
					applications: arrayUnion({
						schoolId: schid,
						schoolName: schoolData.header.schoolName,
						selectedMajor: majorFiltered,
						method: method,
						status: false,
					}),
				});
			} else {
				await setDoc(userDocumentRef, {
					applications: arrayUnion({
						schoolId: schid,
						schoolName: schoolData.header.schoolName,
						selectedMajor: majorFiltered,
						method: method,
						status: false,
					}),
				});
			}
			toggle();
		} catch (error) {
			alert("???? c?? l???i x???y ra, vui l??ng th??? l???i");
		}
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
					<Modal.Title>N???p h??? s?? tr???c tuy???n</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{hasError && <p> ???? c?? l???i x???y ra, vui l??ng th??? l???i</p>}
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
											schoolData={schoolData}
										/>
									)}
								{selectedMethod === null && (
									<p className={style["not-chosen"]}>
										B???n ch??a ch???n ph????ng ??n n??o
									</p>
								)}
								{schoolData.admission.xths === undefined && (
									<p>
										Tr?????ng kh??ng h??? tr??? tuy???n sinh tr???c
										tuy???n
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
