import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Suspense, useContext, useRef } from "react";
import { lerp } from "three/src/math/MathUtils.js";
import AppContext from "../context/AppContext";

const Instructions = () => {
	const text1 = useRef();
	const text2 = useRef();
	const groupRef = useRef();
	const font = "/assets/Doner-RegularDisplay.otf";
	const fontProps = { font, color: "#bacabb", fillOpacity: 1, fontSize: 0.2, letterSpacing: 0.05, lineHeight: 1 };

	const {
		data: { start },
	} = useContext(AppContext);

	useFrame(({ camera }) => {
		if (!start) return;

		// starts at -2
		const pos = camera.position.z;

		if (pos >= 1) {
			text1.current.fillOpacity = lerp(text1.current.fillOpacity, 0, 0.05);
			text2.current.fillOpacity = lerp(text2.current.fillOpacity, 0, 0.05);
			return;
		}
		// text1 - starts 1;
		text1.current.fillOpacity = lerp(text1.current.fillOpacity, -pos - 1, 0.05);
		// text2 - starts 0
		text2.current.fillOpacity = lerp(text2.current.fillOpacity, pos + 2, 0.05);
	});

	return (
		<Suspense>
			<group rotation-y={Math.PI} position-z={0} position-y={1.5} ref={groupRef} dispose={null}>
				<Text ref={text1} {...fontProps}>
					Find the shirt
				</Text>
				<Text ref={text2} {...fontProps} fillOpacity={0} position-z={-1}>
					Grab the shirt
				</Text>
			</group>
		</Suspense>
	);
};

export default Instructions;
