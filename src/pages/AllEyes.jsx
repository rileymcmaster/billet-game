import React from "react";
import { AppProvider } from "../context/AppContext";
import Game from "../components/Game";

const AllEyes = () => {
	return (
		<>
			<AppProvider>
				<Game />
			</AppProvider>
		</>
	);
};

export default AllEyes;
