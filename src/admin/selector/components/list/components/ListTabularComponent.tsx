import { FC } from "react";
import { ListTabularComponentProps } from "../../../../../util/types/Interface";

import { useDispatch } from "react-redux";
import { removeCurrentSelection } from "../../../../../util/state/slice/adminStateSlice";

import Button from "react-bootstrap/Button";

import style from "../../selector/AdminFeatureTable.module.scss";

const ListTabularComponent: FC<ListTabularComponentProps> = (props) => {
    const { info, feature } = props;

    const dispatch = useDispatch();

    const handleRemoving = () => {
        dispatch(removeCurrentSelection({ type: feature, payload: info }));
    };

    return (
        <tr>
            <td>{info.id}</td>
            <td>{info.schoolName}</td>
            <td className={style.center}>
                <Button variant="danger" onClick={handleRemoving}>
                    Xóa
                </Button>
            </td>
        </tr>
    );
};

export default ListTabularComponent;
