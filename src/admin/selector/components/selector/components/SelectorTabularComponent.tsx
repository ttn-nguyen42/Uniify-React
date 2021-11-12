import { FC } from "react";

import { TabularComponentProps } from "../../../../../util/types/Interface";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { addCurrentSelection } from "../../../../../util/state/slice/adminStateSlice";

import style from "../AdminFeatureTable.module.scss";
import { RootState } from "../../../../../util/state/store/globalStore";

const TabularComponent: FC<TabularComponentProps> = (props) => {
    const { info } = props;
    const dispatch = useDispatch();

    const selector = useSelector(
        (state: RootState) => state.adminState.feature
    );

    // Button
    const handleClick = () => {
        dispatch(addCurrentSelection({ payload: info, type: selector }));
    };

    return (
        <tr>
            <td>{info.id}</td>
            <td>{info.schoolName}</td>
            <td>{info.locationCity}</td>
            <td className={style.center}>
                <Button variant="info" onClick={handleClick}>
                    Chọn trường
                </Button>
            </td>
        </tr>
    );
};

export default TabularComponent;
