import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { NavLink } from "react-router-dom";
import SignUpNavbarButton from "../../components/signup-button/SignUpNavbarButton";

import style from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<Navbar variant="dark" expand="md">
			<Container>
				<Navbar.Brand className={style.brand} as={NavLink} to="/">
					Uniify
				</Navbar.Brand>
				<Navbar.Collapse id="navbar">
					<Nav className="me-auto ms-auto">
						<Nav.Link as={NavLink} to="/explore">
							Khám phá
						</Nav.Link>
						<Nav.Link className="ms-3" as={NavLink} to="/about">
							Giới thiệu
						</Nav.Link>
						<Nav.Link className="ms-3" as={NavLink} to="/news">
							Tin tức
						</Nav.Link>
						<Nav.Link className="ms-3" as={NavLink} to="/dashboard">
							Cá nhân
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link className="me-3">Đăng nhập</Nav.Link>
						<SignUpNavbarButton />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
