import style from "./ApplyCard.module.scss";

import Button from "react-bootstrap/Button";
import Bullet from "../../../../components/header/bullets/Bullet";

import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC, useEffect, useState } from "react";
import { ApplyPillProps } from "../../../../util/types/Interface";
import { onAuthStateChanged, User } from "firebase/auth";
import {
	FirebaseAuthentication,
	FirestoreApp,
} from "../../../../util/api/Firebase";
import { useHistory } from "react-router";
import {
	arrayUnion,
	updateDoc,
	doc,
	getDocs,
	getDoc,
	where,
	query,
	collection,
} from "firebase/firestore";

const ApplyCard: FC<ApplyPillProps> = (props) => {
	const { contact, id, favorite } = props;
	const [favorited, updateFavoriteState] = useState<boolean>(favorite);
	const [user, updateUser] = useState<User | null>(null);

	const history = useHistory();

	onAuthStateChanged(FirebaseAuthentication, (currentUser) => {
		updateUser(currentUser);
	});

	useEffect(() => {
		const dataQuery = async () => {
			try {
				if (user !== null) {
					const userDocumentRef = doc(
						FirestoreApp,
						"userdata",
						user.uid
					);
					const userDocumentQuery = await getDoc(userDocumentRef);
					if (userDocumentQuery.exists()) {
						const data = userDocumentQuery.data();
						const favoriteData = data.favorite;
						if (
							favoriteData !== undefined &&
							favoriteData !== null &&
							favoriteData.find((item: any) => item.id === id)
						) {
							updateFavoriteState(true);
						}
					}
				}
			} catch (error) {
				alert("Đã có lỗi xảy ra, vui lòng thử lại");
			}
		};
		dataQuery();
	}, [user, id]);

	const addToFavoriteList = async () => {
		if (user === null) {
			history.push("/auth/login");
			return;
		}

		if (!favorited && user !== null) {
			try {
				const userDocumentRef = doc(FirestoreApp, "userdata", user.uid);
				const previewDocumentQuery = query(
					collection(FirestoreApp, "previewdata"),
					where("id", "==", id)
				);
				const previewDataReceived = await getDocs(previewDocumentQuery);
				if (!previewDataReceived.empty) {
					let previewData: any = [];
					previewDataReceived.forEach((document) =>
						previewData.push(document.data())
                    );
                    await updateDoc(userDocumentRef, {
						favorite: arrayUnion(previewData[0]),
					});
				}
				updateFavoriteState(true);
			} catch (error) {
				alert("Đã có lỗi xảy ra, vui lòng thử lại");
			}
		}
	};

	const applyHandler = () => {
		console.log(id);
	};

	const contactNow = () => {
		console.log(id);
		console.log(contact.contactEmail[0]);
	};

	return (
		<div className={style.apply}>
			<div className={`${style.floating} ${"border"}`}>
				<div className="d-grid gap-2">
					<Button
						variant="warning"
						size="lg"
						className="py-3"
						onClick={applyHandler}
					>
						Nộp hồ sơ ngay
					</Button>
					<div className={style.favorite}>
						<div className={style.fav}>
							<Button
								variant={
									!favorited ? "danger" : "outline-danger"
								}
								size="lg"
								className={`py-3 ${style["full-width"]}`}
								onClick={addToFavoriteList}
								active={favorited}
								disabled={favorited}
							>
								<FontAwesomeIcon
									icon={!favorited ? faHeart : faCheck}
									size="1x"
								/>
							</Button>
						</div>
						<div className={`${style.cont} ps-2`}>
							<Button
								variant="outline-dark"
								size="lg"
								className={`py-3 ${style["full-width"]}`}
								onClick={contactNow}
							>
								Liên hệ ngay
							</Button>
						</div>
					</div>
				</div>
				<div className={style.details}>
					<h3>Ban tuyển sinh</h3>
					<Bullet heading="Mã trường" content={contact.schoolCode} />
					<Bullet heading="Địa chỉ" content={contact.address} />
					<Bullet heading="Email" content={contact.contactEmail} />
					<Bullet
						heading="Số điện thoại"
						content={contact.contactNumber}
					/>
					<Bullet heading="Website" content={contact.mainWebsite} />
				</div>
			</div>
		</div>
	);
};

export default ApplyCard;
