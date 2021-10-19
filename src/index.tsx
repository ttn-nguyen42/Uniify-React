import { render } from "react-dom";
import App from "./app/App";

import { BrowserRouter } from "react-router-dom";

import "./custom/_global.scss";

const root = document.getElementById("root");

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	root
);
