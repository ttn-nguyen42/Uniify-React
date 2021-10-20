import Routing from "./routing/Routing";
import Navigation from "./navbar/Navigation";
import Footer from "./footer/Footer";

import { Fragment } from "react";

import { Provider } from "react-redux";
import globalStore from "../util/state/store/globalStore";

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Provider store={globalStore}>
                <Routing />
            </Provider>
            <Footer />
        </Fragment>
    );
};

export default App;
