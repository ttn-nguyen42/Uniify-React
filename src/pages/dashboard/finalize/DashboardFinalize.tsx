import { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HeaderText from "../../../components/header/header_text/HeaderText";
import Subheader from "../../../components/header/subheader/Subheader";
import { locations } from "../../../util/default/DefaultOptions";

import { PersonalInformationSchema } from "../../../util/schema/PersonalInformationSchema";
import { Formik } from "formik";
import * as yup from "yup";

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {
	FirestoreApp,
	FirebaseAuthentication,
} from "../../../util/api/Firebase";

import style from "./DashboardFinalize.module.scss";
import { FirebaseError } from "firebase/app";
import { useHistory } from "react-router";

import { signOut, User, onAuthStateChanged } from "firebase/auth";

import Spinner from "react-bootstrap/Spinner";

const DashboardFinalize = () => {
	const [user, updateUser] = useState<User | null>(null);
	const [isLoading, updateLoadingState] = useState<boolean>(true);
	
	onAuthStateChanged(FirebaseAuthentication, (currentUser) => {
		if (currentUser === null) {
			history.push("/auth/login");
			return;
		}
		updateUser(currentUser);
	});

	const [userData, updateUserData] = useState<PersonalInformationSchema>({
		fullName: "",
		gender: "",
		dateOfBirth: "",
		placeOfBirth: "",
		ethnic: "",
		socialId: "",
		socialIdProvider: "",
		socialIdDateOfProvision: "",
		registeredLocation: "",
		highschoolInformation: {
			schoolName: "",
			schoolAddress: "",
			schoolLocation: "",
			graduationYear: "",
		},
		contactInformation: {
			phoneNumber: "",
			contactAddress: "",
			contactLocation: "",
		},
	});

	useEffect(() => {
		const fetchUserData = async () => {
			updateLoadingState(true);
			try {
				const documentReference = doc(
					FirestoreApp,
					"userdata",
					user!.uid
				);
				const documentQuery = await getDoc(documentReference);
				if (documentQuery.exists()) {
					updateUserData(
						documentQuery.data()
							.personalInfo as PersonalInformationSchema
					);
				}
			} catch (error) {
				if (error instanceof FirebaseError) {
					console.log(error);
				}
			}
			updateLoadingState(false);
		};
		fetchUserData();
	}, [user]);

	const history = useHistory();

	const signOutAction = async () => {
		try {
			await signOut(FirebaseAuthentication);
			history.push("/");
		} catch (error) {
			alert("???? c?? l???i x???y ra, kh??ng th??? ????ng xu???t, vui l??ng th??? l???i");
		}
	};

	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?[0-9]{3,4}?$/;

	let graduationYearOptions: any = [
		<option key={"empty"} value={""}>
			{""}
		</option>,
	];
	for (let i = 2015; i <= 2021; i++) {
		graduationYearOptions.push(
			<option key={i} value={i}>
				{i}
			</option>
		);
	}

	const validationSchema = yup.object().shape({
		fullName: yup.string().required(),
		gender: yup.string().required(),
		dateOfBirth: yup.string().required(),
		placeOfBirth: yup.string().required(),
		ethnic: yup.string().required(),
		socialId: yup.string().required(),
		socialIdProvider: yup.string().required(),
		socialIdDateOfProvision: yup.string().required(),
		registeredLocation: yup.string().required(),
		highschoolInformation: yup.object({
			schoolName: yup.string().required(),
			schoolAddress: yup.string().required(),
			schoolLocation: yup.string().required(),
			graduationYear: yup.string().required(),
		}),
		contactInformation: yup.object({
			phoneNumber: yup.string().matches(phoneRegExp).required(),
			contactAddress: yup.string().required(),
			contactLocation: yup.string().required(),
		}),
	});

	return (
		<Fragment>
			{isLoading && (
				<section className={style.loading}>
					<Spinner variant="warning" animation="grow" />
				</section>
			)}
			{!isLoading && (
				<section className={style.finalize}>
					<section className={style.info}>
						<HeaderText
							heading="Th??ng tin c?? nh??n"
							desc="Vui l??ng h??y ??i???n nh???ng th??ng tin sau ????? c?? th??? ????ng k?? x??t tuy???n thu???n ti???n h??n"
						/>
						<section className={style.form}>
							<Formik
								validateOnMount
								isInitialValid={false}
								validationSchema={validationSchema}
								enableReinitialize={true}
								onSubmit={async (values, actions) => {
									try {
										const documentReference = doc(
											FirestoreApp,
											"userdata",
											user!.uid
										);
										const documentQuery = await getDoc(
											documentReference
										);
										if (documentQuery.exists()) {
											await updateDoc(documentReference, {
												personalInfo: values,
											});
										} else {
											await setDoc(documentReference, {
												personalInfo: values,
											});
										}
										actions.setSubmitting(false);
										history.push("/dashboard");
									} catch (error) {
										if (error instanceof FirebaseError) {
											console.log(error);
										}
										alert(
											"???? c?? l???i x???y ra, vui l??ng th??? l???i"
										);
										actions.setSubmitting(false);
									}
								}}
								initialValues={userData}
							>
								{({
									handleSubmit,
									handleChange,
									handleBlur,
									values,
									touched,
									errors,
									isSubmitting,
									isValid,
								}) => (
									<Form noValidate onSubmit={handleSubmit}>
										<Row className="mb-3">
											<Col>
												<Form.Group id="full-name">
													<Form.Label>
														H??? v?? t??n
													</Form.Label>
													<Form.Control
														name="fullName"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.fullName}
														isValid={
															touched.fullName &&
															!errors.fullName
														}
														type="text"
														placeholder="H??? v?? t??n"
													/>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="gender">
													<Form.Label>
														Gi???i t??nh
													</Form.Label>
													<div
														className={style.radio}
													>
														<Form.Check
															inline
															type="radio"
															label="Nam"
															value="Nam"
															name="gender"
															checked={
																values.gender ===
																"Nam"
															}
															onChange={
																handleChange
															}
														/>
														<Form.Check
															inline
															type="radio"
															label="N???"
															value="N???"
															name="gender"
															checked={
																values.gender ===
																"N???"
															}
															onChange={
																handleChange
															}
														/>
													</div>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="birthday">
													<Form.Label>
														Ng??y th??ng n??m sinh
													</Form.Label>
													<Form.Control
														type="date"
														name="dateOfBirth"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values.dateOfBirth
														}
														isValid={
															touched.dateOfBirth &&
															!errors.dateOfBirth
														}
													/>
												</Form.Group>
											</Col>
										</Row>
										<Row className="mb-3">
											<Col>
												<Form.Group id="school">
													<Form.Label>
														Tr?????ng THPT
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Tr?????ng THPT"
														name="highschoolInformation.schoolName"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.highschoolInformation
																.schoolName
														}
														isValid={
															touched
																.highschoolInformation
																?.schoolName &&
															!errors
																.highschoolInformation
																?.schoolName
														}
													/>
												</Form.Group>
											</Col>
											<Col>
												<Form.Group id="school-location">
													<Form.Label>
														?????a ch???
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="?????a ch??? tr?????ng THPT"
														name="highschoolInformation.schoolAddress"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.highschoolInformation
																.schoolAddress
														}
														isValid={
															touched
																.highschoolInformation
																?.schoolAddress &&
															!errors
																.highschoolInformation
																?.schoolAddress
														}
													/>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="school-city">
													<Form.Label>
														T???nh/Th??nh ph???
													</Form.Label>
													<Form.Select
														name="highschoolInformation.schoolLocation"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.highschoolInformation
																.schoolLocation
														}
														isValid={
															touched
																.highschoolInformation
																?.schoolLocation &&
															!errors
																.highschoolInformation
																?.schoolLocation
														}
													>
														{locations.map(
															(
																location: string,
																index
															) => (
																<option
																	key={index}
																	value={
																		location
																	}
																>
																	{location}
																</option>
															)
														)}
													</Form.Select>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="graduation-year">
													<Form.Label>
														N??m t???t nghi???p
													</Form.Label>
													<Form.Select
														name="highschoolInformation.graduationYear"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.highschoolInformation
																.graduationYear
														}
														isValid={
															touched
																.highschoolInformation
																?.graduationYear &&
															!errors
																.highschoolInformation
																?.graduationYear
														}
													>
														{graduationYearOptions}
													</Form.Select>
												</Form.Group>
											</Col>
										</Row>
										<Row className="mb-3">
											<Col>
												<Form.Group id="born-location">
													<Form.Label>
														N??i sinh
													</Form.Label>
													<Form.Select
														name="placeOfBirth"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values.placeOfBirth
														}
														isValid={
															touched.placeOfBirth &&
															!errors.placeOfBirth
														}
													>
														{locations.map(
															(
																location: string,
																index
															) => (
																<option
																	key={index}
																	value={
																		location
																	}
																>
																	{location}
																</option>
															)
														)}
													</Form.Select>
												</Form.Group>
											</Col>
											<Col>
												<Form.Group id="ethnic">
													<Form.Label>
														D??n t???c
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="D??n t???c"
														name="ethnic"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.ethnic}
														isValid={
															touched.ethnic &&
															!errors.ethnic
														}
													/>
												</Form.Group>
											</Col>
										</Row>
										<Row className="mb-3">
											<Col>
												<Form.Group id="social-id">
													<Form.Label>
														S??? CCCD
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="S??? CCCD ho???c CMND"
														name="socialId"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.socialId}
														isValid={
															touched.socialId &&
															!errors.socialId
														}
													/>
												</Form.Group>
											</Col>
											<Col>
												<Form.Group id="social-id-location">
													<Form.Label>
														N??i c???p CCCD
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="N??i c???p CCCD"
														name="socialIdProvider"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values.socialIdProvider
														}
														isValid={
															touched.socialIdProvider &&
															!errors.socialIdProvider
														}
													/>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="social-id-date">
													<Form.Label>
														Ng??y c???p
													</Form.Label>
													<Form.Control
														type="date"
														name="socialIdDateOfProvision"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values.socialIdDateOfProvision
														}
														isValid={
															touched.socialIdDateOfProvision &&
															!errors.socialIdDateOfProvision
														}
													/>
												</Form.Group>
											</Col>
										</Row>
										<Row className="mb-5">
											<Col>
												<Form.Group id="house-certificate">
													<Form.Label>
														H??? kh???u th?????ng tr??
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="H??? kh???u th?????ng tr??"
														name="registeredLocation"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values.registeredLocation
														}
														isValid={
															touched.registeredLocation &&
															!errors.registeredLocation
														}
													/>
												</Form.Group>
											</Col>
										</Row>
										<Row>
											<Subheader
												heading="Th??ng tin li??n l???c"
												desc="C??c th??ng tin sau s??? ???????c s??? d???ng trong qu?? tr??nh tuy???n sinh"
											/>
										</Row>
										<Row className="mb-3">
											<Col xs="3">
												<Form.Group id="phone-number">
													<Form.Label>
														S??? ??i???n tho???i
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="S??? ??i???n tho???i"
														name="contactInformation.phoneNumber"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.contactInformation
																.phoneNumber
														}
														isValid={
															touched
																.contactInformation
																?.phoneNumber &&
															!errors
																.contactInformation
																?.phoneNumber
														}
													/>
												</Form.Group>
											</Col>
											<Col>
												<Form.Group id="contact-address">
													<Form.Label>
														?????a ch??? li??n l???c
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="?????a ch??? li??n l???c"
														name="contactInformation.contactAddress"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.contactInformation
																.contactAddress
														}
														isValid={
															touched
																.contactInformation
																?.contactAddress &&
															!errors
																.contactInformation
																?.contactAddress
														}
													/>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="contact-city">
													<Form.Label>
														Th??nh ph???
													</Form.Label>
													<Form.Select
														name="contactInformation.contactLocation"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															values
																.contactInformation
																.contactLocation
														}
														isValid={
															touched
																.contactInformation
																?.contactLocation &&
															!errors
																.contactInformation
																?.contactLocation
														}
													>
														{locations.map(
															(
																location: string,
																index
															) => (
																<option
																	key={index}
																	value={
																		location
																	}
																>
																	{location}
																</option>
															)
														)}
													</Form.Select>
												</Form.Group>
											</Col>
										</Row>
										<Row className="mb-3">
											<Form.Text muted>
												T???t c??? nh???ng th??ng tin tr??n s???
												ch??? ???????c s??? d???ng v??o m???c ????ch
												tuy???n sinh v?? ????a ra nh???ng g???i ??
												ph?? h???p cho ng?????i d??ng
											</Form.Text>
											<Form.Text>
												B???n c?? th??? thay ?????i nh???ng th??ng
												tin n??y b???t c??? l??c n??o
											</Form.Text>
											<Button
												variant="success"
												className="mt-3"
												size="lg"
												type="submit"
												disabled={
													isSubmitting || !isValid
												}
											>
												L??u th??ng tin
											</Button>
										</Row>
									</Form>
								)}
							</Formik>
						</section>
					</section>
					<section className={style["sign-out"]}>
						<Button variant="outline-dark" onClick={signOutAction}>
							????ng xu???t
						</Button>
					</section>
				</section>
			)}
		</Fragment>
	);
};

export default DashboardFinalize;
