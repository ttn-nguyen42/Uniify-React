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
			alert("Đã có lỗi xảy ra, không thể đăng xuất, vui lòng thử lại");
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
							heading="Thông tin cá nhân"
							desc="Vui lòng hãy điền những thông tin sau để có thể đăng ký xét tuyển thuận tiện hơn"
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
											"Đã có lỗi xảy ra, vui lòng thử lại"
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
														Họ và tên
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
														placeholder="Họ và tên"
													/>
												</Form.Group>
											</Col>
											<Col xs="auto">
												<Form.Group id="gender">
													<Form.Label>
														Giới tính
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
															label="Nữ"
															value="Nữ"
															name="gender"
															checked={
																values.gender ===
																"Nữ"
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
														Ngày tháng năm sinh
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
														Trường THPT
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Trường THPT"
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
														Địa chỉ
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Địa chỉ trường THPT"
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
														Tỉnh/Thành phố
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
														Năm tốt nghiệp
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
														Nơi sinh
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
														Dân tộc
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Dân tộc"
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
														Số CCCD
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Số CCCD hoặc CMND"
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
														Nơi cấp CCCD
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Nơi cấp CCCD"
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
														Ngày cấp
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
														Hộ khẩu thường trú
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Hộ khẩu thường trú"
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
												heading="Thông tin liên lạc"
												desc="Các thông tin sau sẽ được sử dụng trong quá trình tuyển sinh"
											/>
										</Row>
										<Row className="mb-3">
											<Col xs="3">
												<Form.Group id="phone-number">
													<Form.Label>
														Số điện thoại
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Số điện thoại"
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
														Địa chỉ liên lạc
													</Form.Label>
													<Form.Control
														type="text"
														placeholder="Địa chỉ liên lạc"
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
														Thành phố
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
												Tất cả những thông tin trên sẽ
												chỉ được sử dụng vào mục đích
												tuyển sinh và đưa ra những gợi ý
												phù hợp cho người dùng
											</Form.Text>
											<Form.Text>
												Bạn có thể thay đổi những thông
												tin này bất cứ lúc nào
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
												Lưu thông tin
											</Button>
										</Row>
									</Form>
								)}
							</Formik>
						</section>
					</section>
					<section className={style["sign-out"]}>
						<Button variant="outline-dark" onClick={signOutAction}>
							Đăng xuất
						</Button>
					</section>
				</section>
			)}
		</Fragment>
	);
};

export default DashboardFinalize;
