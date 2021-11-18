import style from "./Dashboard.module.scss";

import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FirebaseAuthentication, FirestoreApp } from "../../util/api/Firebase";

import { Fragment, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useHistory } from "react-router";
import DashboardFinalize from "./finalize/DashboardFinalize";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const [user, updateCurrentUser] = useState<User | null>(null);
	const [isLoading, updateLoadingState] = useState<boolean>(true);
	const [hasUserDocument, updateDocumentState] = useState<boolean>(false);

	const history = useHistory();

	onAuthStateChanged(FirebaseAuthentication, (currentUser) => {
		if (currentUser === null) {
			history.push("/auth/login");
			return;
		}
		updateCurrentUser(currentUser);
	});

	useEffect(() => {
		const checkUserDocument = async () => {
			// Check if there is user document
			if (user !== null) {
				try {
					const userDocumentReference = doc(
						FirestoreApp,
						"userdata",
						user.uid
					);
					const userDocumentSnapshot = await getDoc(
						userDocumentReference
					);
					if (userDocumentSnapshot.exists()) {
						updateDocumentState(true);
					} else {
						updateDocumentState(false);
						history.push("/dashboard/personal-info");
					}
				} catch (error) {
					alert("Đã có lỗi xảy ra, vui lòng thử lại");
				}
				updateLoadingState(false);
			}
		};
		checkUserDocument();
	}, [history, user]);

	const signOutAction = async () => {
		try {
			await signOut(FirebaseAuthentication);
			history.push("/");
		} catch (error) {
			alert("Đã có lỗi xảy ra, không thể đăng xuất, vui lòng thử lại");
		}
	};

	return (
		<Fragment>
			{isLoading && (
				<div className={style.loading}>
					<Spinner animation="grow" variant="warning" />
				</div>
			)}
			{!isLoading && (
				<div className={style.dashboard}>
					{user !== null && hasUserDocument && (
						<div>
							<p>{user.uid}</p>
							<Link to="/dashboard/personal-info">Thay đổi thông tin cá nhân</Link>
							<Button
								variant="outline-dark"
								onClick={signOutAction}
							>
								Đăng xuất
							</Button>
						</div>
					)}
				</div>
			)}
		</Fragment>
	);
};

export default Dashboard;
