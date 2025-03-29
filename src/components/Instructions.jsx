import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { calculateFloat } from "../helpers/mathHelper";
import { lerp } from "three/src/math/MathUtils.js";

const Instructions = () => {
	const text1 = useRef();
	const text2 = useRef();
	const groupRef = useRef();
	const font = "/assets/Doner-RegularDisplay.otf";
	const fontProps = { font, color: "#bacabb", fillOpacity: 1, fontSize: 0.2, letterSpacing: 0.05, lineHeight: 1 };

	let ratioTally = 0;
	useFrame(({ camera }) => {
		const { ratio, ratioMax } = calculateFloat({ start: -2, end: 0, value: camera.position.z });
		if (ratioMax > 0 && ratioTally < ratioMax) {
			ratioTally = ratioMax;
			text1.current.fillOpacity = lerp(text1.current.fillOpacity, 1 - ratioMax, 0.05);
		}

		if (ratio >= 1) {
			text1.current.fillOpacity = lerp(text1.current.fillOpacity, 0, 0.05);
			text2.current.fillOpacity = lerp(text2.current.fillOpacity, 0, 0.05);
			return;
		}

		if (ratioTally > 0.3) {
			text2.current.fillOpacity = lerp(text2.current.fillOpacity, ratioMax, 0.05);
		}
	});
	return (
		<group rotation-y={Math.PI} position-z={0} position-y={1.5} ref={groupRef} dispose={null}>
			<Text ref={text1} {...fontProps}>
				Find the shirt
			</Text>
			<Text ref={text2} {...fontProps} fillOpacity={0} position-z={-1}>
				Grab the shirt
			</Text>
		</group>
	);
};

export default Instructions;
