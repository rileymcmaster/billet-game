import React from "react";
import { Route, Routes } from "react-router-dom";
import AllEyes from "./pages/AllEyes";
import SimpleContent from "./pages/SimpleContent";
import "./css/styles.scss";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<SimpleContent />}></Route>
				<Route path="/game" element={<AllEyes />}></Route>
			</Routes>
		</>
	);
};

export default App;
