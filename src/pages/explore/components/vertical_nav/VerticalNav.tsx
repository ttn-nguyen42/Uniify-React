import Nav from "react-bootstrap/Nav";

import style from "./VerticalNav.module.scss";

const VerticalNav = () => {
	return (
		<div className={style.explorer}>
            <Nav variant="pills" className="flex-column">
			<Nav.Item>
				<Nav.Link eventKey="kdkt">Kinh doanh và kinh tế</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="sxcb">Sản xuất và chế biến</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="ktxd">Kiến trúc và xây dựng</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="cntt">Công nghệ thông tin</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="ltnv">Luật - nhân văn</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="ntdh">Nghệ thuật và đồ họa</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="bcxh">Báo chí và xã hội</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="khcb">Khoa học cơ bản</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="spgd">Giáo dục và sư phạm</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="nlnn">Nông - lâm - ngư nghiệp</Nav.Link>
			</Nav.Item>
		</Nav>
        </div>
	);
};

export default VerticalNav;
