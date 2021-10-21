import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { updateGallerySchema } from "../../../../util/state/slice/adminSlice";

import { GallerySchema } from "../../../../util/schema/DatabaseSchema";

const GallerySchemaInput = () => {
    const formState = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    return (
        <section>
            <Row className="gap-3">
                <Col md>
                    <Form.Group>
                        <Form.Label>Ảnh chính</Form.Label>
                        <Alert variant="warning">
                            Ảnh được đặt làm ảnh chính ở trang profile riêng của
                            trường trong mục <b>Khám phá</b>
                            <br />
                            Lấy link ảnh từ Google (nhớ phải lấy URL).
                        </Alert>
                        <Form.Control
                            type="text"
                            value={formState.gallery.mainImage}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newImageState: GallerySchema = {
                                    ...formState.gallery,
                                    mainImage: event.target.value,
                                };
                                dispatch(updateGallerySchema(newImageState));
                            }}
                        ></Form.Control>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Ảnh phụ 1</Form.Label>
                        <Alert variant="warning">
                            Ảnh được đặt làm ảnh bên phải đầu tiên ở trang
                            profile riêng của trường trong mục <b>Khám phá</b>
                            <br />
                            Được dùng làm ảnh cho avatar nhỏ tại trang Explore
                        </Alert>
                        <Form.Control
                            type="text"
                            value={formState.gallery.sideImage1}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newImageState: GallerySchema = {
                                    ...formState.gallery,
                                    sideImage1: event.target.value,
                                };
                                dispatch(updateGallerySchema(newImageState));
                            }}
                        ></Form.Control>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Ảnh phụ 2</Form.Label>
                        <Alert variant="warning">
                            Ảnh được đặt làm ảnh bên phải thứ 2 ở trang profile
                            riêng của trường trong mục <b>Khám phá</b>
                            <br />
                            Chưa có mục đích khác cụ thể
                        </Alert>
                        <Form.Control
                            type="text"
                            value={formState.gallery.sideImage2}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newImageState: GallerySchema = {
                                    ...formState.gallery,
                                    sideImage2: event.target.value,
                                };
                                dispatch(updateGallerySchema(newImageState));
                            }}
                        ></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </section>
    );
};

export default GallerySchemaInput;
