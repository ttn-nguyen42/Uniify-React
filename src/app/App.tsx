import Routing from "./routing/Routing";
import Navigation from "./navbar/Navigation";

import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<Navigation />
			<Routing />
		</Fragment>
	);
};

export default App;
