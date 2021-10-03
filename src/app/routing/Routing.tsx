import Explore from "../../pages/explore/Explore";
import News from "../../pages/news/News";
import Dashboard from "../../pages/dashboard/Dashboard";

import { Switch, Route } from "react-router";

const Routing = () => {
	return (
		<section>
			<Switch>
				<Route path="/" exact>
					<Explore />
				</Route>
				<Route path="/news" exact>
					<News />
				</Route>
				<Route path="/dashboard" exact>
					<Dashboard />
				</Route>
			</Switch>
		</section>
	);
};

export default Routing;
