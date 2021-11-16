import style from "./InfoExplorer.module.scss";

import VerticalNav from "../vertical_nav/VerticalNav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InfoList from "../info_list/InfoList";

import { useSelector } from "react-redux";
import { RootState } from "../../../../util/state/store/globalStore";
import { useEffect, useState } from "react";
import { categoriesWithKey } from "../../../../util/default/DefaultOptions";
import { ShortPreviewSchema } from "../../../../util/schema/DatabaseSchema";

import { FirestoreApp } from "../../../../util/api/Firebase";
import { query, where, collection, getDocs } from "firebase/firestore";

const InfoExplorer = () => {
    const explorerSlice = useSelector(
        (state: RootState) => state.explorer.category
    );

    const location = useSelector((state: RootState) => state.explorer.location);

    const [data, updateData] = useState<ShortPreviewSchema[]>([]);
    const [isLoading, updateLoadingState] = useState<boolean>(true);

    useEffect(() => {
        // Firebase connection established here
        const performQuery = async () => {
            try {
                updateLoadingState(true);
                const queryParameters = query(
                    collection(FirestoreApp, "previewdata"),
                    where("locationCity", "==", location),
                    where("category." + explorerSlice, "==", true)
                );
                const queryResult = await getDocs(queryParameters);

                let transformedResult: ShortPreviewSchema[] = [];
                queryResult.forEach((document: any) =>
                    transformedResult.push(document.data())
                );
                updateData(transformedResult);
                setTimeout(() => {
                    updateLoadingState(false);
                }, 500);
            } catch (error) {
                alert("Đã có lỗi xảy ra, vui lòng thử lại");
            }
        };
        performQuery();
    }, [location, explorerSlice]);

    const panes = categoriesWithKey.map(
        (category: { key: string; category: string }, index) => (
            <Tab.Pane key={index} eventKey={category.key}>
                <InfoList
                    loading={isLoading}
                    category={category.category}
                    location={location}
                    data={data}
                />
            </Tab.Pane>
        )
    );

    return (
        <section className={style.explorer}>
            <Tab.Container defaultActiveKey="kinh-doanh-kinh-te">
                <Row className={style.container}>
                    <Col sm={3}>
                        <VerticalNav />
                    </Col>
                    <Col>
                        <Tab.Content>{panes}</Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </section>
    );
};

export default InfoExplorer;
