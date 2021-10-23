import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../util/state/store/globalStore";
import {updateOverviewSchema} from "../../../../util/state/slice/adminSlice";
import {OverviewSchema} from "../../../../util/schema/DatabaseSchema";
import Alert from "react-bootstrap/Alert";
import React from "react";

import {filterArray} from "../../../../util/ultility/UtilityFunctions";

const subjectOfEducationOptions = [
    "Đại học",
    "Sau đại học (Thạc sĩ)",
    "Sau đại học (Tiến sĩ)",
];

const programOptions = [
    "Đại trà",
    "Chính quy",
    "Chất lượng cao (CLC TT23)",
    "Liên kết quốc tế",
    "Vừa học vừa làm",
];

const entryMonthOptions = ["Tháng 2 (Xuân)", "Tháng 9 (Thu)"];

const studyTimeOptions = [
    "3 năm",
    "4 năm",
    "5 năm",
    "5 năm (cấp bằng Thạc sĩ)",
];

const OverviewSchemaInput = () => {
    const formState = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    return (
        <section>
            <Row className="gap-3">
                <Col md>
                    <Form.Group>
                        <Form.Label>Giới thiệu</Form.Label>
                        <Form.Control
                            style={{height: "100%"}}
                            as="textarea"
                            value={formState.overview.description}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newDescriptionState: OverviewSchema = {
                                    ...formState.overview,
                                    description: event.target.value,
                                };
                                dispatch(
                                    updateOverviewSchema(newDescriptionState)
                                );
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Cấp đào tạo</Form.Label>
                        {subjectOfEducationOptions.map((item: any, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newSubjectState: OverviewSchema =
                                            {
                                                ...formState.overview,
                                                subjectOfEducation: [
                                                    ...formState.overview
                                                        .subjectOfEducation,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newSubjectState.subjectOfEducation =
                                                filterArray(
                                                    newSubjectState.subjectOfEducation,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateOverviewSchema(
                                                newSubjectState
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
                        <Form.Label>Chương trình đào tạo</Form.Label>
                        {programOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newSubjectState: OverviewSchema =
                                            {
                                                ...formState.overview,
                                                programs: [
                                                    ...formState.overview
                                                        .programs,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newSubjectState.programs =
                                                filterArray(
                                                    newSubjectState.programs,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateOverviewSchema(
                                                newSubjectState
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
                        <Form.Label>Thời gian nhập học</Form.Label>
                        {entryMonthOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newSubjectState: OverviewSchema =
                                            {
                                                ...formState.overview,
                                                entryMonth: [
                                                    ...formState.overview
                                                        .entryMonth,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newSubjectState.entryMonth =
                                                filterArray(
                                                    newSubjectState.entryMonth,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateOverviewSchema(
                                                newSubjectState
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
                        <Form.Label>Thời gian đào tạo</Form.Label>
                        {studyTimeOptions.map((item: string, index) => {
                            return (
                                <Form.Check
                                    label={item}
                                    key={index}
                                    type="checkbox"
                                    id={item}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newSubjectState: OverviewSchema =
                                            {
                                                ...formState.overview,
                                                studyTime: [
                                                    ...formState.overview
                                                        .studyTime,
                                                    item,
                                                ],
                                            };
                                        if (!event.target.checked) {
                                            newSubjectState.studyTime =
                                                filterArray(
                                                    newSubjectState.studyTime,
                                                    item
                                                );
                                        }
                                        dispatch(
                                            updateOverviewSchema(
                                                newSubjectState
                                            )
                                        );
                                    }}
                                />
                            );
                        })}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <Form.Group>
                        <Form.Label>Ảnh cơ sở vật chất</Form.Label>
                        <Alert variant="warning">
                            Lấy URL ảnh từ Google, cách mỗi link sử dụng dấu
                            ";", không cách dòng, không whitespace. Tối thiểu 3
                            ảnh
                            <br/>
                            Ví dụ: www.url-anh.com/image=600x600<b>;</b>
                            www.url-anh.com/image=800x300
                        </Alert>
                        <Form.Control
                            style={{height: "100%"}}
                            as="textarea"
                            value={formState.overview.facilityImage[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newImageLinkState: OverviewSchema = {
                                    ...formState.overview,
                                    facilityImage: [event.target.value],
                                };
                                dispatch(
                                    updateOverviewSchema(newImageLinkState)
                                );
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </section>
    );
};

export default OverviewSchemaInput;
