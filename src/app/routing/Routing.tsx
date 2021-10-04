import Explore from "../../pages/explore/Explore";
import News from "../../pages/news/News";
import Dashboard from "../../pages/dashboard/Dashboard";
import About from "../../pages/about/About";
import SchoolInfo from "../../pages/school-info/School";
import Landing from "../../pages/landing/Landing";

import { Switch, Route } from "react-router";

const Routing = () => {
	return (
		<main>
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
				<Route path="/info/id=:id">
					<SchoolInfo />
				</Route>
			</Switch>
		</main>
	);
};

export default Routing;
