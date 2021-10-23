import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../util/state/store/globalStore";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import {updateContactSchema, updateFacilitySchema,} from "../../../../util/state/slice/adminSlice";
import {ContactSchema, FacilitySchema,} from "../../../../util/schema/DatabaseSchema";

const ContactSchemaInput = () => {
    const formState = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    return (
        <section>
            <Row className="gap-3">
                <Col md>
                    <Form.Group>
                        <Form.Label>Địa chỉ</Form.Label>
                        <Alert variant="warning">
                            Địa chỉ đầy đủ của trường
                            <br/>
                            Viết hoa đầu dòng, các cơ sở cách nhau băng dấu ";"
                            <br/>
                            Ví dụ: 268 Lý Thường Kiệt, Q.10, TP.HCM;...
                        </Alert>
                        <Form.Control
                            as="textarea"
                            value={formState.contact.address[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newContactState: ContactSchema = {
                                    ...formState.contact,
                                    address: [event.target.value],
                                };
                                const newFacilityState: FacilitySchema = {
                                    ...formState.facility,
                                    branches: [event.target.value],
                                };
                                dispatch(updateContactSchema(newContactState));
                                dispatch(
                                    updateFacilitySchema(newFacilityState)
                                );
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Alert variant="warning" style={{height: "100%"}}>
                            Email liên hệ của trường
                            <br/>
                            Các email cách nhau 1 dấu ";", tối thiểu 1 email
                            <br/>
                            Ví dụ: aao@hcmut.edu.vn;oisp@hcmut.edu.vn
                            <br/>
                        </Alert>
                        <Form.Control
                            as="textarea"
                            style={{height: "auto"}}
                            value={formState.contact.contactEmail[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newContactState: ContactSchema = {
                                    ...formState.contact,
                                    contactEmail: [event.target.value],
                                };
                                dispatch(updateContactSchema(newContactState));
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Website</Form.Label>
                        <Alert variant="warning" style={{height: "100%"}}>
                            Website của trường
                            <br/>
                            Các website cách nhau 1 dấu ";", tối thiểu 1 website
                            <br/>
                            Ví dụ: oisp.hcmut.edu.vn;aao.hcmut.edu.vn
                            <br/>
                        </Alert>
                        <Form.Control
                            as="textarea"
                            style={{height: "auto"}}
                            value={formState.contact.mainWebsite[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newContactState: ContactSchema = {
                                    ...formState.contact,
                                    mainWebsite: [event.target.value],
                                };
                                dispatch(updateContactSchema(newContactState));
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="gap-3 mt-4">
                <Col md>
                    <Form.Group>
                        <Form.Label>Số điện thoại</Form.Label>
                        <Alert variant="warning">
                            Số điện thoại của trường
                            <br/>
                            Cách nhau băng dấu ";", tối thiếu 1 SDT
                            <br/>
                            Ví dụ: (023) 456 789;...
                        </Alert>
                        <Form.Control
                            as="textarea"
                            value={formState.contact.contactNumber[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newContactState: ContactSchema = {
                                    ...formState.contact,
                                    contactNumber: [event.target.value],
                                };
                                dispatch(updateContactSchema(newContactState));
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Mã trường</Form.Label>
                        <Alert variant="warning">
                            Mã trường
                            <br/>
                            Cách nhau băng dấu ";", tối thiếu 1 mã trường
                            <br/>
                            Ví dụ: QSB;ABC
                        </Alert>
                        <Form.Control
                            as="textarea"
                            value={formState.contact.schoolCode[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newContactState: ContactSchema = {
                                    ...formState.contact,
                                    schoolCode: [event.target.value],
                                };
                                dispatch(updateContactSchema(newContactState));
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </section>
    );
};

export default ContactSchemaInput;
