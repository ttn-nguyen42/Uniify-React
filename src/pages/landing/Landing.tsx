import { Fragment, useEffect, useState } from "react";

import style from "./Landing.module.scss";

import { ReactComponent as EducationSVG } from "../../assets/svg/education.svg";
import CallToActionButton from "./components/call_to_action/CallToActionButton";
import Featured from "./components/featured/Featured";
import Categories from "./components/categories/Categories";
import QuickNews from "./components/news/QuickNews";

import { CategoryType, QuickNewsCardType } from "../../util/types/Type";
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

const dummyListCategories: CategoryType[] = [
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kỹ thuật - Công nghệ",
        description:
            "Cung cấp các giải pháp công nghệ, kỹ thuật cao cho xã hội,...",
        id: "ktcn",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
    {
        category: "Kinh tế - Tài chính",
        description:
            "Tổ chức điều phối các hoạt động kinh tế, quản lý, tài chính,...",
        id: "kttc",
    },
];

const dummyNews: QuickNewsCardType[] = [
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T11:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022 Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra Extra",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
    {
        title: "Kỳ thi tuyển sinh Đại học năm 2022",
        provider: "VnExpress",
        imageUrl:
            "https://hanoimoi.com.vn/Uploads/images/phananh/2021/03/28/tuyensinh.jpg",
        url: "dummy",
        timestamp: new Date("2021-10-15T10:13:10Z"),
    },
];

const Landing = () => {
    const [isLoading, updateLoadingState] = useState<boolean>(true);
    const [featuredData, updateData] = useState<any>([]);
    const [mostViewedData, updateViewData] = useState<any>([]);
    const [highestRatedData, updateHighestRatedData] = useState<any>([]);

    useEffect(() => {
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
        updateLoadingState(false);
    }, []);

    return (
        <Fragment>
            <section className={style.marg}>
                <div className={style.landing}>
                    <div className={style.cta}>
                        <h1>Cùng Uniify kiến tạo tương lai</h1>
                        <p>
                            Khám phá và tìm hiểu thông tin, đăng ký xét tuyển
                            tại những trường Đại học yêu thích của mình. Hãy bắt
                            đầu ngay bây giờ!
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
                    list={dummyListCategories}
                />
                <QuickNews
                    interface={{
                        heading: "Tin tức mới",
                        description:
                            "Tìm hiểu những tin tức mới nhất liên quan đến tuyển sinh Đại học",
                        news: dummyNews,
                    }}
                />
            </section>
        </Fragment>
    );
};

export default Landing;
