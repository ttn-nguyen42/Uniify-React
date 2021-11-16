import style from "./GlobalExplorer.module.scss";

import Featured from "../../../landing/components/featured/Featured";

import { Fragment, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { FirestoreApp } from "../../../../util/api/Firebase";

import Spinner from "react-bootstrap/Spinner";

const GlobalExplorer = () => {
    const [data, updateData] = useState<any>([]);
    const [isLoading, updateLoadingState] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
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
                alert("Đã có lỗi xảy ra, vui lòng thử lại");
            }
            updateLoadingState(false);
        };
        fetchData();
    }, []);

    return (
        <Fragment>
            {isLoading && (
                <section className={style.center}>
                    <Spinner animation="grow" variant="warning" />
                </section>
            )}
            {!isLoading && (
                <section className={style.explorer}>
                    <Featured
                        type={{
                            heading: "Gần bạn nhất",
                            subheading:
                                "Các trường có địa điểm gần bạn vị trí của bạn nhất",
                            badge: {
                                enable: false,
                                content: "",
                                variant: "",
                            },
                            itemList: data.featured,
                        }}
                    />
                    <Featured
                        type={{
                            heading: "Phù hợp với bạn",
                            subheading:
                                "Các trường có mức điểm chuẩn kỳ thi THPTQG phù hợp với bạn",
                            badge: {
                                enable: true,
                                content: "Phù hợp",
                                variant: "success",
                            },
                            itemList: data["for-you"],
                        }}
                    />
                    <div className={style.header}>
                        <h2>Có thể thú vị</h2>
                        <p>
                            Hãy mở rộng thêm nhiều những lựa chọn cho bản thân
                            cùng Uniify
                        </p>
                    </div>
                    <Featured
                        type={{
                            heading: "Trường quốc tế",
                            subheading:
                                "Những trường quốc tế có mặt trên khắp Việt Nam",
                            badge: {
                                enable: true,
                                content: "Quốc tế",
                                variant: "info",
                            },
                            itemList: data.international,
                        }}
                    />
                    <Featured
                        type={{
                            heading: "Liên kết quốc tế",
                            subheading:
                                "Những trường có các hệ liên kết quốc tế, toàn cầu hóa",
                            badge: {
                                enable: true,
                                content: "Liên kết",
                                variant: "primary",
                            },
                            itemList: data.associate,
                        }}
                    />
                </section>
            )}
        </Fragment>
    );
};

export default GlobalExplorer;
