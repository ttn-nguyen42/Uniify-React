import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";
import SignUpNavbarButton from "../../components/signup_button/SignUpNavbarButton";
import { useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuthentication } from "../../util/api/Firebase";

import style from "./Navigation.module.scss";

const Navigation = () => {
	const [isLoggedIn, updateLoginState] = useState<boolean>(false);
	onAuthStateChanged(FirebaseAuthentication, (currentUser) => {
		if (currentUser) {
			updateLoginState(true);
		} else {
			updateLoginState(false);
		}
	});
	return (
		<Navbar variant="light" expand="md">
			<div className={style.navbar}>
				<Navbar.Brand className={style.brand} as={NavLink} to="/">
					Uniify
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/explore">
							Khám phá
						</Nav.Link>
						<Nav.Link as={NavLink} to="/about">
							Giới thiệu
						</Nav.Link>
						<Nav.Link as={NavLink} to="/news">
							Tin tức
						</Nav.Link>
						{isLoggedIn && (
							<Nav.Link as={NavLink} to="/dashboard">
								Cá nhân
							</Nav.Link>
						)}
					</Nav>
					{!isLoggedIn && (
						<Nav className="ms-md-5">
							<Nav.Link
								as={NavLink}
								to="/auth/login"
								className="me-md-2"
							>
								Đăng nhập
							</Nav.Link>
							<SignUpNavbarButton />
						</Nav>
					)}
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Navigation;
