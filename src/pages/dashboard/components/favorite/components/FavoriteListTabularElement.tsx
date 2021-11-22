import { FC } from "react";
import Button from "react-bootstrap/Button";

import { FavoriteTabularElementProps } from "../../../../../util/types/Interface";

import style from "../DashboardFavorite.module.scss";

const FavoriteListTabularElement: FC<FavoriteTabularElementProps> = (props) => {
	const { info, remove } = props;

	const handleRemoving = () => {
		remove(info);
	};

	return (
		<tr>
			<td style={{ width: "90%" }}>{info.schoolName}</td>
			<td className={style.center}>
				<Button variant="danger" onClick={handleRemoving}>
					Xóa
				</Button>
			</td>
		</tr>
	);
};

export default FavoriteListTabularElement;
