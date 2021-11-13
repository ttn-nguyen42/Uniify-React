import Nav from "react-bootstrap/Nav";

import style from "./CategoryVerticalNav.module.scss";

import { useHistory } from "react-router";
import { FC } from "react";
import { CategoryVerticalNavProps } from "../../../../../util/types/Interface";

const CategoryVerticalNav: FC<CategoryVerticalNavProps> = (props) => {
    const history = useHistory();

    const onSelectCategory = (eventKey: any) =>
        history.push("/category/" + eventKey);

    return (
        <div className={style.explorer}>
            <Nav
                variant="pills"
                className="flex-column"
                onSelect={onSelectCategory}
                defaultActiveKey={props.selectedCategory}
            >
                <Nav.Item>
                    <Nav.Link eventKey="kinh-doanh-kinh-te">
                        Kinh doanh và kinh tế
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="san-xuat-che-bien">
                        Sản xuất và chế biến
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="kien-truc-xay-dung">
                        Kiến trúc và xây dựng
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="cong-nghe-thong-tin">
                        Công nghệ thông tin
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="luat-nhan-van">
                        Luật - nhân văn
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="nghe-thuat-do-hoa">
                        Nghệ thuật và đồ họa
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="bao-chi-xa-hoi">
                        Báo chí và xã hội
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="khoa-hoc-co-ban">
                        Khoa học cơ bản
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="giao-duc-su-pham">
                        Giáo dục và sư phạm
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="nong-lam-ngu-nghiep">
                        Nông - lâm - ngư nghiệp
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default CategoryVerticalNav;
