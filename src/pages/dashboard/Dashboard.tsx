import style from "./Dashboard.module.scss";

import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FirebaseAuthentication, FirestoreApp } from "../../util/api/Firebase";

import { Fragment, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useHistory } from "react-router";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import HeaderText from "../../components/header/header_text/HeaderText";
import DashboardBody from "./components/body/DashboardBody";

import { useDispatch } from "react-redux";
import { updateSelectedFunctionality } from "../../util/state/slice/dashboardSlice";

const Dashboard = () => {
	const [user, updateCurrentUser] = useState<User | null>(null);
	const [isLoading, updateLoadingState] = useState<boolean>(true);
	const [hasUserDocument, updateDocumentState] = useState<boolean>(false);
	const [userInfo, updateUserInfo] = useState<any>();

	const dispatch = useDispatch();

	const history = useHistory();

	onAuthStateChanged(FirebaseAuthentication, (currentUser) => {
		if (currentUser === null) {
			history.push("/auth/login");
			return;
		}
		updateCurrentUser(currentUser);
	});

	useEffect(() => {
		dispatch(updateSelectedFunctionality("favorite"));
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
						updateUserInfo(userDocumentSnapshot.data());
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
							<HeaderText
								heading="Trang cá nhân"
								desc="Thay đổi, cập nhật các thông tin cá nhân của bạn tại đây"
							/>
							<DashboardBody
								userId={user.uid}
								userInfo={userInfo}
							/>
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
