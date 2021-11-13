import style from "./Login.module.scss";
import HeaderText from "../../../components/header/header_text/HeaderText";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import useForm from "../../../util/hooks/useForm";
import { FC, SyntheticEvent, useState } from "react";
import { LoginCredential } from "../../../util/types/Type";
import { LoginProps } from "../../../util/types/Interface";

const Login: FC<LoginProps> = (props) => {
    const { submitLoginCredential, toggleLoading } = props;
    const [persistentLogin, setPersistentStatus] = useState<boolean>(false);

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

    const persistentLoginHandler = () => setPersistentStatus((prev) => !prev);

    const submissable =
        !emailError && !passwordError && emailStatus && passwordStatus;

    const setFormStatus = () => {
        setEmailStatus();
        setPasswordStatus();
    };

    const resetForm = () => {
        resetEmail();
        resetPassword();
        setPersistentStatus(false);
    };

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        setFormStatus();
        if (submissable) {
            const loginCredential: LoginCredential = {
                email: email,
                password: password,
                persistentLogin: persistentLogin,
            };
            submitLoginCredential(loginCredential);
            resetForm();
            toggleLoading();
        }
    };

    return (
        <div className={style.login}>
            <HeaderText
                heading="Đăng nhập"
                desc="Hãy cùng Uniify chắp cánh cho những ước mơ của bạn"
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
                    <Form.Check
                        type="checkbox"
                        label="Lưu thông tin đăng nhập"
                        onChange={persistentLoginHandler}
                        checked={persistentLogin}
                    />
                </Form.Group>
                <Button
                    variant="warning"
                    type="submit"
                    size="lg"
                    style={{ width: "100%" }}
                >
                    Đăng nhập
                </Button>
            </Form>
        </div>
    );
};

export default Login;
