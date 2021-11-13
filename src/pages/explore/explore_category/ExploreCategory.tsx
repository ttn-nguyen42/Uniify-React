import { useParams } from "react-router";
import { useState, useEffect, Fragment } from "react";
import { FirestoreApp } from "../../../util/api/Firebase";

import { collection, query, where, getDocs } from "firebase/firestore";
import HeaderText from "../../../components/header/header_text/HeaderText";
import { categoriesWithKeyAndDescription } from "../../../util/default/DefaultOptions";
import CategoryVerticalNav from "./components/vertical_nav/CategoryVerticalNav";
import CategoryInfoExplorer from "./components/info_explorer/CategoryInfoExplorer";

import style from "./ExploreCategory.module.scss";

import Spinner from "react-bootstrap/Spinner";

interface ExploreCategoryParams {
    category: string;
}

const ExploreCategory = () => {
    const params = useParams();
    const { category } = params as ExploreCategoryParams;

    const [isLoading, updateLoadingState] = useState<boolean>(true);
    const [data, updateData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            const collectionReference = collection(FirestoreApp, "previewdata");
            const queryParams = query(
                collectionReference,
                where("category." + category, "==", true)
            );
            const queryResult = await getDocs(queryParams);
            let transformedResult: any = [];
            queryResult.forEach((document) => {
                transformedResult.push(document.data());
            });
            updateData(transformedResult);
            updateLoadingState(false);
        };
        fetchData();
    }, [category]);

    const categoryInfo = categoriesWithKeyAndDescription.find(
        (categoryItem) => categoryItem.key === category
    );
    const categoryName = categoryInfo!.category;
    const categoryDescription = categoryInfo!.description;

    return (
        <Fragment>
            {isLoading && (
                <div className={style.loading}>
                    <Spinner animation="grow" variant="warning" />{" "}
                </div>
            )}
            {!isLoading && (
                <div className={style.body}>
                    <HeaderText
                        heading={categoryName}
                        desc={categoryDescription}
                    />
                    <div className={style.flex}>
                        <CategoryVerticalNav selectedCategory={category} />
                        <CategoryInfoExplorer
                            data={data}
                            selectedCategory={category}
                        />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default ExploreCategory;
