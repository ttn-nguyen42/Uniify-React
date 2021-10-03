import Routing from "./routing/Routing";
import Navigation from "./navbar/Navigation";

import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<main>
				<Navigation />
				<Routing />
			</main>
		</Fragment>
	);
};

export default App;
