import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./css/all.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>
);
