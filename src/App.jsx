import React from "react";
import { Route, Routes } from "react-router-dom";
import AllEyes from "./pages/AllEyes";
import HomePage from "./pages/HomePage";
import "./css/all.scss";
import Bio from "./pages/Bio";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/game" element={<AllEyes />}></Route>
				<Route path="/bio" element={<Bio />}></Route>
			</Routes>
		</>
	);
};

export default App;
