import Nav from "react-bootstrap/Nav";

import { useDispatch } from "react-redux";
import { updateCurrentFeature } from "../../../../util/state/slice/adminStateSlice";

const AdminFeatureNavbar = () => {
    const dispatch = useDispatch();

    const handleSelection = (eventKey: any) => {
        dispatch(updateCurrentFeature(eventKey));
    };

    return (
        <Nav
            justify
            variant="tabs"
            defaultActiveKey="featured"
            onSelect={handleSelection}
        >
            <Nav.Item>
                <Nav.Link eventKey="featured">Được giới thiệu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="for-you">Phù hợp với bạn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="international">Trường quốc tế</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="associate">Liên kết quốc tế</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default AdminFeatureNavbar;
