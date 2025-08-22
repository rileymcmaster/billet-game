import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

const Bio = lazy(() => import("./pages/Bio"));
const AllEyes = lazy(() => import("./pages/AllEyes"));

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/bio" element={<Bio />}></Route>
				<Route path="/game" element={<AllEyes />}></Route>
			</Routes>
		</>
	);
};

export default App;
