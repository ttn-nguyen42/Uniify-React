import { FC, SyntheticEvent } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import HeaderText from "../../../components/header/header_text/HeaderText";
import { RegisterProps } from "../../../util/types/Interface";
import useForm from "../../../util/hooks/useForm";

import style from "./Register.module.scss";
import { RegisterCredential } from "../../../util/types/Type";

const Register: FC<RegisterProps> = (props) => {
    const { submitRegisterCredential, toggleLoading, hasError, errorMessage } = props;

	const [
		email,
		updateEmail,
		emailStatus,
		setEmailStatus,
		resetEmail,
		emailError,
	] = useForm((string) => string.length !== 0);

	const [
		password,
		updatePassword,
		passwordStatus,
		setPasswordStatus,
		resetPassword,
		passwordError,
	] = useForm((string) => string.length !== 0);

	const [
		passwordConfirm,
		updatePasswordConfirm,
		passwordStatusConfirm,
		setPasswordStatusConfirm,
		resetPasswordConfirm,
		passwordErrorConfirm,
	] = useForm((string) => string.length !== 0);

    const submissable =
        !emailError &&
        !passwordError &&
        !passwordErrorConfirm &&
        emailStatus &&
        passwordStatus &&
        passwordStatusConfirm;

	const setFormStatus = () => {
		setEmailStatus();
		setPasswordStatus();
		setPasswordStatusConfirm();
	};

	const resetForm = () => {
		resetEmail();
		resetPassword();
		resetPasswordConfirm();
	};

	const submitForm = (event: SyntheticEvent) => {
		event.preventDefault();
		setFormStatus();
		if (submissable) {
			const registerCredential: RegisterCredential = {
				email: email,
				password: password,
			};
			submitRegisterCredential(registerCredential);
			resetForm();
			toggleLoading();
		}
	};

	const checkPassword = passwordConfirm === password && passwordStatusConfirm;

	return (
		<div className={style.register}>
			{hasError && (
				<Alert variant="danger">
					{errorMessage}
				</Alert>
			)}
			<HeaderText
				heading="????ng k??"
				desc="H??y kh??m ph?? ngay nh???ng ??i???u th?? v??? c??ng Uniify"
			/>
			<Form onSubmit={submitForm}>
				<Form.Group className="mb-3">
					<Form.Label>?????a ch??? email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Nh???p email"
						onChange={updateEmail}
						value={email}
						isInvalid={emailError}
						onBlur={setEmailStatus}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>M???t kh???u</Form.Label>
					<Form.Control
						type="password"
						placeholder="Nh???p m???t kh???u"
						onChange={updatePassword}
						value={password}
						isInvalid={passwordError}
						onBlur={setPasswordStatus}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Nh???p l???i m???t kh???u</Form.Label>
					<Form.Control
						type="password"
						placeholder="Nh???p l???i m???t kh???u"
						onChange={updatePasswordConfirm}
						value={passwordConfirm}
						isInvalid={passwordErrorConfirm}
						onBlur={setPasswordStatusConfirm}
						isValid={checkPassword}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Check
						className="mb-3"
						type="checkbox"
						label="T??i ?????ng ?? v???i c??c ??i???u kho???n s??? d???ng"
						required
					/>
				</Form.Group>
				<Button
					variant="warning"
					type="submit"
					size="lg"
					style={{ width: "100%" }}
				>
					????ng k??
				</Button>
			</Form>
		</div>
	);
};

export default Register;
