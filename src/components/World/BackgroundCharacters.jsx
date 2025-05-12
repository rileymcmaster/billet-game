import React from "react";
import Character_JRM from "../models/Character_JRM";

const BackgroundCharacters = () => {
	return (
		<>
			<Character_JRM scale={0.5} position={[0, 1.9, 10]} rotate={Math.PI} animation="silly dance" />
			<Character_JRM scale={0.5} position={[-1, 3.75, -2.2]} rotate={0} animation="dance jazz" />
			<Character_JRM scale={0.5} position={[3.8, 2.55, 17]} rotate={-Math.PI / 2} animation="dance slide" />
		</>
	);
};

export default BackgroundCharacters;
