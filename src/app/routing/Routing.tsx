import Explore from "../../pages/explore/Explore";
import News from "../../pages/news/News";
import Dashboard from "../../pages/dashboard/Dashboard";
import About from "../../pages/about/About";
import SchoolInfo from "../../pages/school_info/SchoolInfo";
import Landing from "../../pages/landing/Landing";

import DatabaseAdmin from "../../admin/DatabaseAdmin";
import AdminFeatureSelector from "../../admin/selector/AdminFeatureSelector";

import style from "./Routing.module.scss";
import { Switch, Route } from "react-router";
import ExploreCategory from "../../pages/explore/explore_category/ExploreCategory";
import Authentication from "../../pages/authentication/Authentication";
import ErrorPage from "../../pages/error_page/ErrorPage";
import DashboardFinalize from "../../pages/dashboard/finalize/DashboardFinalize";

const Routing = () => {
    return (
        <main className={style.main}>
            <Switch>
                <Route path="/" exact>
                    <Landing />
                </Route>
                <Route path="/explore" exact>
                    <Explore />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/news" exact>
                    <News />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
                <Route path="/dashboard/personal-info" exact>
                    <DashboardFinalize />
                </Route>
                <Route path="/explore/:id">
                    <SchoolInfo />
                </Route>
                <Route path="/category/:category">
                    <ExploreCategory />
                </Route>
                <Route path="/auth/:action">
                    <Authentication />
                </Route>
                <Route path="/admin" exact>
                    <DatabaseAdmin />
                </Route>
                <Route path="/admin/selector" exact>
                    <AdminFeatureSelector />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </main>
    );
};

export default Routing;
