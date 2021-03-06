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

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../util/state/slice/schoolInfoSlice";
import { RootState } from "../../../../util/state/store/globalStore";

const ApplyCard: FC<ApplyPillProps> = (props) => {
	const { contact, id, favorite } = props;
	const [favorited, updateFavoriteState] = useState<boolean>(favorite);
	const [user, updateUser] = useState<User | null>(null);
	const [hasApplied, updateApplicationStatus] = useState<boolean>(false);

	const history = useHistory();
	const dispatch = useDispatch();
	const applyModalState = useSelector(
		(state: RootState) => state.schoolInfoNavigator.modalIsShowing
	);

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

						const applicationData = data.applications;
						if (applicationData === undefined) {
							updateApplicationStatus(false);
						} else {
							const findResult = applicationData.find(
								(application: any) =>
									application.schoolId === id
							);
							if (
								findResult === undefined ||
								findResult === null
							) {
								updateApplicationStatus(false);
							} else {
								updateApplicationStatus(true);
							}
						}
					}
				}
			} catch (error) {
				alert("???? c?? l???i x???y ra, vui l??ng th??? l???i");
			}
		};
		dataQuery();
	}, [user, id, applyModalState]);

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
				alert("???? c?? l???i x???y ra, vui l??ng th??? l???i");
			}
		}
	};

	const applyHandler = () => {
		if (user == null) {
			history.push("/auth/login");
			return;
		}
		dispatch(toggleModal());
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
						disabled={hasApplied}
					>
						N???p h??? s?? ngay
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
								Li??n h??? ngay
							</Button>
						</div>
					</div>
				</div>
				<div className={style.details}>
					<h3>Ban tuy???n sinh</h3>
					<Bullet heading="M?? tr?????ng" content={contact.schoolCode} />
					<Bullet heading="?????a ch???" content={contact.address} />
					<Bullet heading="Email" content={contact.contactEmail} />
					<Bullet
						heading="S??? ??i???n tho???i"
						content={contact.contactNumber}
					/>
					<Bullet heading="Website" content={contact.mainWebsite} />
				</div>
			</div>
		</div>
	);
};

export default ApplyCard;
