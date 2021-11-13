import style from "./Authentication.module.scss";

import { useParams } from "react-router";
import Login from "./login/Login";
import Register from "./register/Register";
import { LoginCredential, RegisterCredential } from "../../util/types/Type";
import { useState, Fragment } from "react";

import Spinner from "react-bootstrap/Spinner";

interface AuthenticationParams {
    action: string;
}

const Authentication = () => {
    const params = useParams();
    const { action } = params as AuthenticationParams;

    const [isLoading, setLoadingStatus] = useState<boolean>(false);

    const handleLogin = (payload: LoginCredential) => {
        console.log(payload);
        setTimeout(() => {
            setLoadingStatus(false);
        }, 2000);
    };

    const handleRegister = (payload: RegisterCredential) => {
        console.log(payload);
        setTimeout(() => {
            setLoadingStatus(false);
        }, 2000);
    };

    return (
        <Fragment>
            {isLoading && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />
                </div>
            )}
            {!isLoading && (
                <div className={style.authentication}>
                    {action === "login" && (
                        <Login
                            submitLoginCredential={handleLogin}
                            toggleLoading={() => {
                                setLoadingStatus(true);
                            }}
                        />
                    )}
                    {action === "register" && (
                        <Register
                            submitRegisterCredential={handleRegister}
                            toggleLoading={() => {
                                setLoadingStatus(true);
                            }}
                        />
                    )}
                </div>
            )}
        </Fragment>
    );
};

export default Authentication;
