import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";
import SignUpNavbarButton from "../../components/signup-button/SignUpNavbarButton";

import style from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<Navbar variant="dark" expand="md">
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
						<Nav.Link as={NavLink} to="/dashboard">
							Cá nhân
						</Nav.Link>
					</Nav>
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
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Navigation;
