import Explore from "../../pages/explore/Explore";
import News from "../../pages/news/News";
import Dashboard from "../../pages/dashboard/Dashboard";
import About from "../../pages/about/About";
import SchoolInfo from "../../pages/school_info/SchoolInfo";
import Landing from "../../pages/landing/Landing";

import { Switch, Route } from "react-router";

import style from "./Routing.module.scss";
import DatabaseAdmin from "../../admin/DatabaseAdmin";

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
                <Route path="/explore/:id">
                    <SchoolInfo />
                </Route>
                <Route path="/admin" exact>
                    <DatabaseAdmin />
                </Route>
            </Switch>
        </main>
    );
};

export default Routing;
