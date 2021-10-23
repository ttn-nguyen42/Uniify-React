import { useDispatch, useSelector } from "react-redux";
import { updateMajorSchema } from "../../../../util/state/slice/adminSlice";
import { MajorListSchema } from "../../../../util/schema/DatabaseSchema";

import Form from "react-bootstrap/Form";

import Alert from "react-bootstrap/Alert";
import { RootState } from "../../../../util/state/store/globalStore";
import React from "react";

const MajorSchemaInput = () => {
    const formState = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    return (
        <section>
            <Form.Group>
                <Form.Label>Các ngành học</Form.Label>
                <Alert variant="warning">
                    Các ngành học viết hoa đầu câu, cách nhau bởi dấu ";"
                    <br />
                    Không cần ghi điểm (tạm thời chỉ demo thôi nên điểm sẽ được
                    random hết)
                    <br />
                    Ví dụ: Khoa học máy tính;Công nghệ sinh học;Quản lý công
                    nghiệp;...
                </Alert>
                <Form.Control
                    as="textarea"
                    value={formState.major.allMajorList[0]}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const newMajorState: MajorListSchema = {
                            ...formState.major,
                            allMajorList: [event.target.value],
                        };
                        dispatch(updateMajorSchema(newMajorState));
                    }}
                />
            </Form.Group>
        </section>
    );
};

export default MajorSchemaInput;
