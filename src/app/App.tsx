import Routing from "./routing/Routing";
import Navigation from "./navbar/Navigation";
import Footer from "./footer/Footer";

import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<Navigation />
			<Routing />
            <Footer />
		</Fragment>
	);
};

export default App;
