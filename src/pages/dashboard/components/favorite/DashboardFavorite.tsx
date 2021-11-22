import { DashboardContentProps } from "../../../../util/types/Interface";
import style from "./DashboardFavorite.module.scss";

import { FC, useEffect, useState } from "react";
import { FirestoreApp } from "../../../../util/api/Firebase";
import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import Table from "react-bootstrap/Table";
import { ShortPreviewSchema } from "../../../../util/schema/DatabaseSchema";
import FavoriteListTabularElement from "./components/FavoriteListTabularElement";

const DashboardFavorite: FC<DashboardContentProps> = (props) => {
	const { userId } = props.info;
	const [data, updateData] = useState<any>();
	const [deletedAction, updateDeletionState] = useState<boolean>(false);

	const removeFavorite = async (info: ShortPreviewSchema) => {
		try {
			const documentRef = doc(FirestoreApp, "userdata", userId);
			await updateDoc(documentRef, {
				favorite: arrayRemove(info),
			});
			updateDeletionState((prev: boolean) => !prev);
		} catch (error) {
			alert("Đã có lỗi xảy ra, vui lòng thử lại");
		}
	};

	useEffect(() => {
		const queryData = async () => {
			try {
				const documentRef = doc(FirestoreApp, "userdata", userId);
				const documentResult = await getDoc(documentRef);
				if (documentResult.exists()) {
					const favoriteData = documentResult.data().favorite;
					updateData(favoriteData);
				}
			} catch (error) {
				alert("Đã có lỗi xảy ra, vui lòng thử lại");
			}
		};
		queryData();
	}, [deletedAction]);

	let tableRows: any = [];

	if (data !== null && data !== undefined) {
		tableRows = data.map((item: ShortPreviewSchema, index: number) => (
			<FavoriteListTabularElement
				remove={removeFavorite}
				info={item}
				key={index}
			/>
		));
	}

	return (
		<div className={style.favorite}>
			{tableRows.length === 0 && (
				<p className={style.center}>Bạn chưa có trường yêu thích</p>
			)}
			{tableRows.length !== 0 && (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th style={{ width: "90%" }}>Tên trường</th>
							<th
								className={style.center}
							>
								Xoá trường
							</th>
						</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</Table>
			)}
		</div>
	);
};

export default DashboardFavorite;
