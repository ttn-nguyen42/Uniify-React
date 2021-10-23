import {useDispatch, useSelector} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {RootState} from "../../../../util/state/store/globalStore";

import {updateAdmissionSchema, updateFacilitySchema} from "../../../../util/state/slice/adminSlice";
import {AdmissionSchema, FacilitySchema} from "../../../../util/schema/DatabaseSchema";

import React from "react";
import {filterArray} from "../../../../util/ultility/UtilityFunctions";

const supportingFacilityOptions = [
    "Sân bóng đá",
    "Sân bóng rổ",
    "Sân cầu lông",
    "Sân tennis",
    "Bể bơi thể thao",
    "Canteen",
    "Cửa hàng tiện lợi",
    "Khu vực giải trí",
    "Khu vực tự học",
    "Thư viện",
    "Trung tâm khởi nghiệp",
    "Sân khấu",
    "Ký túc xá",
    "Hội trường",
    "Không có",
];

const labOptions = [
    "Vật lý",
    "Điện lạnh",
    "Cơ khí",
    "Vật liệu",
    "Hóa học",
    "Sinh học",
    "Phòng máy tính",
    "Xây dựng",
    "Mỹ thuật",
    "Thiết kế thời trang",
    "Thiết kế đồ họa",
    "Mô phỏng",
    "Vườn trong nhà",
    "Giải phẫu",
    "Điều dưỡng",
    "Phòng mổ",
    "Không có",
];

export const thptqgOptions = [
    "Khối A",
    "Khối B",
    "Khối C",
    "Khôi D",
    "Khối H",
    "Không",
];

export const dgnlOptions = [
    "Đánh giá Năng lực của ĐHQG TP.HCM",
    "Đánh giá Năng lực của ĐHQG Hà Nội",
    "Đánh giá Năng lực của ĐHQG Đà Nẵng",
    "Kiểm tra tư duy ĐH Bách khoa Hà Nội",
    "Tổ chức riêng (Có)",
    "Không",
];

export const xthsOptions = [
    "Ưu tiên xét tuyển của ĐHQG TP.HCM",
    "Xét tuyển hồ sơ cùng chứng chỉ IELTS",
    "Xét tuyển bằng chứng chỉ quốc tế",
    "Theo thể thức riêng (Có)",
    "Không",
];

export const otherOptions = [
    "Tuyển thẳng theo quy định BGD&ĐT",
    "Tuyển thẳng theo quy định riêng (Có)",
    "Tuyển thẳng người nước ngoài",
    "Không",
];

const FacilitySchemaInput = () => {
    const formState = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    return (
        <section>
            <Row className="gap-3">
                <Col md>
                    <Form.Group>
                        <Form.Label>Cơ sở vật chất hỗ trợ</Form.Label>
                        {supportingFacilityOptions.map(
                            (item: string, index) => {
                                return (
                                    <Form.Check
                                        label={item}
                                        key={index}
                                        type="checkbox"
                                        id={item}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newFacilityState: FacilitySchema =
                                                {
                                                    ...formState.facility,
                                                    supportingFacility: [
                                                        ...formState.facility
                                                            .supportingFacility,
                                                        item,
                                                    ],
                                                };
                                            if (!event.target.checked) {
                                                newFacilityState.supportingFacility =
                                                    filterArray(
                                                        newFacilityState.supportingFacility,
                                                        item
                                                    );
                                            }
                                            dispatch(
                                                updateFacilitySchema(
                                                    newFacilityState
                                                )
                                            );
                                        }}
                                    />
                                );
                            }
                        )}
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Phòng thí nghiệm</Form.Label>
                        {labOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newFacilityState: FacilitySchema =
                                            {
                                                ...formState.facility,
                                                labs: [
                                                    ...formState.facility.labs,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newFacilityState.labs = filterArray(
                                                newFacilityState.labs,
                                                item
                                            );
                                        }
                                        dispatch(
                                            updateFacilitySchema(
                                                newFacilityState
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
                        <Form.Label>Khối thi THPTQG</Form.Label>
                        {thptqgOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newAdmissionState: AdmissionSchema =
                                            {
                                                ...formState.admission,
                                                thptqg: [
                                                    ...formState.admission
                                                        .thptqg,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newAdmissionState.thptqg =
                                                filterArray(
                                                    newAdmissionState.thptqg,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateAdmissionSchema(
                                                newAdmissionState
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
                        <Form.Label>Xét tuyển hồ sơ</Form.Label>
                        {xthsOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newAdmissionState: AdmissionSchema =
                                            {
                                                ...formState.admission,
                                                xths: [
                                                    ...formState.admission.xths,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newAdmissionState.xths =
                                                filterArray(
                                                    newAdmissionState.xths,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateAdmissionSchema(
                                                newAdmissionState
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
                        <Form.Label>Đánh giá năng lực (Thi riêng)</Form.Label>
                        {dgnlOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newAdmissionState: AdmissionSchema =
                                            {
                                                ...formState.admission,
                                                dgnl: [
                                                    ...formState.admission.dgnl,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newAdmissionState.dgnl =
                                                filterArray(
                                                    newAdmissionState.dgnl,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateAdmissionSchema(
                                                newAdmissionState
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
                        <Form.Label>Các phương thức khác</Form.Label>
                        {otherOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newAdmissionState: AdmissionSchema =
                                            {
                                                ...formState.admission,
                                                otherMethod: [
                                                    ...formState.admission
                                                        .otherMethod,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newAdmissionState.otherMethod =
                                                filterArray(
                                                    newAdmissionState.otherMethod,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateAdmissionSchema(
                                                newAdmissionState
                                            )
                                        );
                                    }}
                                />
                            );
                        })}
                    </Form.Group>
                </Col>
            </Row>
        </section>
    );
};

export default FacilitySchemaInput;
