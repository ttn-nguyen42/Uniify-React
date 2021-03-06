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
				heading="Đăng ký"
				desc="Hãy khám phá ngay những điều thú vị cùng Uniify"
			/>
			<Form onSubmit={submitForm}>
				<Form.Group className="mb-3">
					<Form.Label>Địa chỉ email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Nhập email"
						onChange={updateEmail}
						value={email}
						isInvalid={emailError}
						onBlur={setEmailStatus}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Mật khẩu</Form.Label>
					<Form.Control
						type="password"
						placeholder="Nhập mật khẩu"
						onChange={updatePassword}
						value={password}
						isInvalid={passwordError}
						onBlur={setPasswordStatus}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Nhập lại mật khẩu</Form.Label>
					<Form.Control
						type="password"
						placeholder="Nhập lại mật khẩu"
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
						label="Tôi đồng ý với các Điều khoản sử dụng"
						required
					/>
				</Form.Group>
				<Button
					variant="warning"
					type="submit"
					size="lg"
					style={{ width: "100%" }}
				>
					Đăng ký
				</Button>
			</Form>
		</div>
	);
};

export default Register;
