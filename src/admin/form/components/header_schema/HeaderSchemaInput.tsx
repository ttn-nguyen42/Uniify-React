import { useDispatch, useSelector } from "react-redux";
import { HeaderSchema } from "../../../../util/schema/DatabaseSchema";
import { RootState } from "../../../../util/state/store/globalStore";
import { updateHeaderSchema } from "../../../../util/state/slice/adminSlice";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";

const HeaderSchemaInput = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: RootState) => state.admin);
    return (
        <section>
            <Row className="gap-3">
                <Col md>
                    <Form.Group>
                        <Form.Label>Tên trường</Form.Label>
                        <Alert variant="warning">
                            Viết hoa đầu câu, đầy đủ tên
                            <br />
                            Ví dụ: Trường Đại học Bách khoa TP.HCM; Trường Đại
                            học Kinh tế TP.HCM;...
                        </Alert>
                        <Form.Control
                            value={formState.header.schoolName}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newHeaderState: HeaderSchema = {
                                    ...formState.header,
                                    schoolName: event.target.value,
                                };
                                dispatch(updateHeaderSchema(newHeaderState));
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Tên tiếng Anh</Form.Label>
                        <Alert variant="warning">
                            Viết hoa đầu câu, đầy đủ tên
                            <br />
                            Ví dụ: Ho Chi Minh University of Technology; Ho Chi
                            Minh University of Economics;...
                        </Alert>
                        <Form.Control
                            value={formState.header.englishName}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newHeaderState: HeaderSchema = {
                                    ...formState.header,
                                    englishName: event.target.value,
                                };
                                dispatch(updateHeaderSchema(newHeaderState));
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </section>
    );
};

export default HeaderSchemaInput;
