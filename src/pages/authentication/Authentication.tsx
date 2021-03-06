import style from "./Authentication.module.scss";

import { useParams, useHistory } from "react-router";
import Login from "./login/Login";
import Register from "./register/Register";
import { LoginCredential, RegisterCredential } from "../../util/types/Type";
import { useState, Fragment } from "react";

import Spinner from "react-bootstrap/Spinner";
import ErrorPage from "../error_page/ErrorPage";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	setPersistence,
	browserSessionPersistence
} from "firebase/auth";
import { FirebaseAuthentication } from "../../util/api/Firebase";
import { FirebaseError } from "firebase/app";

interface AuthenticationParams {
	action: string;
}

const Authentication = () => {
	const params = useParams();
	const { action } = params as AuthenticationParams;

	const [isLoading, setLoadingStatus] = useState<boolean>(true);
	const [loginHasError, setLoginErrorState] = useState<boolean>(false);
	const [registerHasError, setRegisterErrorState] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const history = useHistory();

	onAuthStateChanged(FirebaseAuthentication, (currentUser) => {
		if (currentUser) {
			history.push("/dashboard");
		} else {
			setLoadingStatus(false);
		}
	});

	let instanceError = false;

	const handleLogin = async (payload: LoginCredential) => {
		setLoadingStatus(true);
		setErrorMessage("");
		setLoginErrorState(false);
		const { email, password, persistentLogin } = payload;
		try {
			await signInWithEmailAndPassword(
				FirebaseAuthentication,
				email,
				password
			);
			if (!persistentLogin) {
				await setPersistence(FirebaseAuthentication, browserSessionPersistence);
			}
			setLoadingStatus(false);
			history.push("/dashboard");
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log(error.code);
				if (
					error.code === "auth/user-not-found" ||
					error.code === "auth/invalid-password" ||
					error.code === "auth/wrong-password"
				) {
					setErrorMessage(
						"T??i kho???n kh??ng t???n t???i ho???c m???t kh???u ch??a ????ng, vui l??ng th??? l???i"
					);
				} else {
					setErrorMessage(
						"????ng nh???p kh??ng th??nh c??ng, vui l??ng th??? l???i"
					);
				}
			}
			setLoginErrorState(true);
			setLoadingStatus(false);
		}
	};

	const handleRegister = async (payload: RegisterCredential) => {
		setLoadingStatus(true);
		setErrorMessage("");
		setRegisterErrorState(false);
		const { email, password } = payload;
		try {
			await createUserWithEmailAndPassword(
				FirebaseAuthentication,
				email,
				password
			);
			setLoadingStatus(false);
			history.push("/dashboard");
			// Check for doc
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code === "auth/email-already-exists") {
					setErrorMessage(
						"Email n??y ???? ???????c s??? d???ng, vui l??ng ????ng nh???p ho???c s??? d???ng email m???i"
					);
				} else {
					setErrorMessage(
						"????ng k?? kh??ng th??nh c??ng, vui l??ng th??? l???i"
					);
				}
			}
			setRegisterErrorState(true);
			setLoadingStatus(false);
		}
	};

	if (action !== "register" && action !== "login") {
		instanceError = true;
	}

	return (
		<Fragment>
			{instanceError && <ErrorPage />}
			{isLoading && !instanceError && (
				<div className={style.loading}>
					<Spinner animation="grow" variant="warning" />
				</div>
			)}
			{!isLoading && !instanceError && (
				<div className={style.authentication}>
					{action === "login" && (
						<Login
							submitLoginCredential={handleLogin}
							toggleLoading={() => {
								setLoadingStatus(true);
							}}
							hasError={loginHasError}
							errorMessage={errorMessage}
						/>
					)}
					{action === "register" && (
						<Register
							submitRegisterCredential={handleRegister}
							toggleLoading={() => {
								setLoadingStatus(true);
							}}
							hasError={registerHasError}
							errorMessage={errorMessage}
						/>
					)}
				</div>
			)}
		</Fragment>
	);
};

export default Authentication;
