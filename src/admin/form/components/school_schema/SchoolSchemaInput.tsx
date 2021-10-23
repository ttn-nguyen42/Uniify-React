import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import {slugifyCategory, slugifyLocation,} from "../../../../util/ultility/UtilityFunctions";

import {useDispatch, useSelector} from "react-redux";
import {updateSchoolSchema} from "../../../../util/state/slice/adminSlice";

import {RootState} from "../../../../util/state/store/globalStore";
import React from "react";

const locations = [
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
];

const categories = [
    "Kinh doanh và kinh tế",
    "Sản xuất và chế biến",
    "Kiến trúc và xây dựng",
    "Công nghệ thông tin",
    "Luật - nhân văn",
    "Nghệ thuật và đồ họa",
    "Báo chí và xã hội",
    "Khoa học cơ bản",
    "Giáo dục và sư phạm",
    "Nông lâm ngư nghiệp",
];

const cityOptions = locations.map((item: string, index) => {
    const sluggedStringForUrl = slugifyLocation(item);
    return (
        <option key={index} value={sluggedStringForUrl}>
            {item}
        </option>
    );
});

const SchoolSchemaInput = () => {
    const formState = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();

    return (
        <section>
            <h5>Phân loại dữ liệu</h5>
            <p>Thông tin sử dụng để phân loại dữ liệu</p>
            <Row className="gap-3">
                <Col md>
                    <Form.Group>
                        <Form.Label>Thành phố</Form.Label>
                        <Form.Select
                            defaultValue={formState.locationCity}
                            onChange={(
                                event: React.ChangeEvent<HTMLSelectElement>
                            ) => {
                                const currentCityState = {
                                    ...formState,
                                    locationCity: event.target.value,
                                };
                                dispatch(updateSchoolSchema(currentCityState));
                            }}
                        >
                            {cityOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Danh mục</Form.Label>
                        {categories.map((item: string, index) => {
                            const sluggedStringForUrl = slugifyCategory(item);
                            return (
                                <Form.Check
                                    type="checkbox"
                                    key={index}
                                    label={item}
                                    id={sluggedStringForUrl}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const currentCategoryState = {
                                            ...formState,
                                            category: {
                                                ...formState.category,
                                                [sluggedStringForUrl]: true,
                                            },
                                        };
                                        if (!event.target.checked) {
                                            delete currentCategoryState
                                                .category[sluggedStringForUrl];
                                        }
                                        dispatch(
                                            updateSchoolSchema(
                                                currentCategoryState
                                            )
                                        );
                                    }}
                                />
                            );
                        })}
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Quận & Thành phố</Form.Label>
                        <Alert variant="warning">
                            Ngắn gọn, được viết tắt <b>Thành phố</b> thành{" "}
                            <b>TP</b>, phải viết hoa đầu chữ
                            <br/>
                            Ví dụ: Quận 10, TP.HCM; Hai Bà Trưng, Hà Nội;...
                        </Alert>
                        <Form.Control
                            type="text"
                            value={formState.shortLocation}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const currentShortState = {
                                    ...formState,
                                    shortLocation: event.target.value,
                                };
                                dispatch(updateSchoolSchema(currentShortState));
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </section>
    );
};

export default SchoolSchemaInput;
