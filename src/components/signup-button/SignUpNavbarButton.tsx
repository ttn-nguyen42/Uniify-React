import Button from "react-bootstrap/Button";

import { useHistory } from "react-router";

const SignUpNavbarButton = () => {
	const history = useHistory();
	const asNavLink = () => {
		history.push("/auth/register");
	};
	return (
		<Button variant="outline-warning" onClick={asNavLink}>
			Đăng ký
		</Button>
	);
};

export default SignUpNavbarButton;
