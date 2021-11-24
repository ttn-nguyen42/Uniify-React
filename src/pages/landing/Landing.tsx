import { Fragment, useEffect, useState } from "react";

import style from "./Landing.module.scss";

import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";
import CallToActionButton from "./components/call_to_action/CallToActionButton";
import Featured from "./components/featured/Featured";
import Categories from "./components/categories/Categories";

import {
	collection,
	doc,
	getDoc,
	orderBy,
	query,
	limit,
	getDocs,
} from "firebase/firestore";
import { FirestoreApp } from "../../util/api/Firebase";
import { categoriesWithKeyAndDescription } from "../../util/default/DefaultOptions";
import { Spinner } from "react-bootstrap";

const Landing = () => {
	const [isLoading, updateLoadingState] = useState<boolean>(true);
	const [featuredData, updateData] = useState<any>([]);
	const [mostViewedData, updateViewData] = useState<any>([]);
	const [highestRatedData, updateHighestRatedData] = useState<any>([]);

	useEffect(() => {
		updateLoadingState(true);
		const fetchFeatureData = async () => {
			try {
				const documentReference = doc(
					FirestoreApp,
					"featuredata",
					"featurelist"
				);
				const documentResult = await getDoc(documentReference);

				if (documentResult.exists()) {
					updateData(documentResult.data());
				} else {
					throw Error;
				}
			} catch (error) {
				console.log(error);
				alert("Đã xảy ra lỗi, vui lòng thử lại");
			}
		};

		const fetchViewedData = async () => {
			try {
				const collectionReference = collection(
					FirestoreApp,
					"previewdata"
				);
				const queryMostViewedParameter = query(
					collectionReference,
					orderBy("numberOfRating", "desc"),
					limit(10)
				);
				const queryHighestRatingParameter = query(
					collectionReference,
					orderBy("averageRating", "desc"),
					limit(10)
				);
				const mostViewedResult = await getDocs(
					queryMostViewedParameter
				);
				const highestRatingResult = await getDocs(
					queryHighestRatingParameter
				);
				if (!mostViewedResult.empty) {
					let mostViewedDocuments: any = [];
					mostViewedResult.forEach((document) =>
						mostViewedDocuments.push(document.data())
					);
					updateViewData(mostViewedDocuments);
				}
				if (!highestRatingResult.empty) {
					let highestRatedDocuments: any = [];
					highestRatingResult.forEach((document) =>
						highestRatedDocuments.push(document.data())
					);
					updateHighestRatedData(highestRatedDocuments);
				} else {
					throw Error;
				}
			} catch (error) {
				console.log(error);
				alert("Đã xảy ra lỗi, vui lòng thử lại");
			}
		};

		fetchFeatureData();
		fetchViewedData();
		setTimeout(() => updateLoadingState(false), 1000);
	}, []);

	return (
		<Fragment>
			{isLoading && (
				<div className={style.loading}>
					<Spinner animation="grow" variant="warning" />
				</div>
			)}
			{!isLoading && (
				<section className={style.marg}>
					<div className={style.landing}>
						<div className={style.cta}>
							<h1>Cùng Uniify kiến tạo tương lai</h1>
							<p>
								Khám phá và tìm hiểu thông tin, đăng ký xét
								tuyển tại những trường Đại học yêu thích của
								mình. Hãy bắt đầu ngay bây giờ!
							</p>
							<CallToActionButton />
						</div>
						<div className={style.illustration}>
							<EducationSVG />
						</div>
					</div>
					<Featured
						type={{
							heading: "Được giới thiệu",
							subheading: "Các trường được Uniify giới thiệu",
							badge: {
								enable: true,
								content: "Quảng cáo",
								variant: "warning",
							},
							itemList: featuredData.featured,
						}}
					/>
					<Featured
						type={{
							heading: "Xem nhiều nhất",
							subheading:
								"Các trường được người dùng quan tâm nhiều nhất trên Uniify",
							badge: {
								enable: true,
								content: "Nổi bật",
								variant: "info",
							},
							itemList: mostViewedData,
						}}
					/>
					<Featured
						type={{
							heading: "Đánh giá cao nhất",
							subheading:
								"Các trường được nhận được đánh giá cao nhất trong tháng",
							badge: {
								enable: true,
								content: "Đánh giá cao",
								variant: "success",
							},
							itemList: highestRatedData,
						}}
					/>
					<Categories
						heading="Theo khối ngành"
						description="Tìm hiểu và chọn trường theo khối ngành"
						list={categoriesWithKeyAndDescription}
					/>
				</section>
			)}
		</Fragment>
	);
};

export default Landing;
