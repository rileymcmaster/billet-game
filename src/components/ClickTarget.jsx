import { Text, useCursor } from "@react-three/drei";
import React, { useContext, useRef, useState } from "react";
import AppContext from "../context/AppContext";
import { lerp } from "three/src/math/MathUtils.js";

import fontProps from "../helpers/fontProps";
import { useFrame } from "@react-three/fiber";

const ClickTarget = (props) => {
	const textRef = useRef();
	const [isActive, setIsActive] = useState(false);
	const [hasBeenClicked, setHasBeenClicked] = useState(false);

	const ref = useRef(null);
	const [hover, setHover] = useState(false);
	useCursor(hover);

	const {
		actions: { handleOpenModal },
	} = useContext(AppContext);

	const handlePointerIn = () => {
		setHover(true);
	};
	const handlePointerOut = () => {
		setHover(false);
	};

	const handleClick = (e) => {
		e.stopPropagation();
		setHasBeenClicked(true);
		handleOpenModal();
	};

	useFrame(({ camera }) => {
		const endPos = camera.position.z >= 18;

		if (!isActive && endPos) {
			setIsActive(true);
		}
		if (hasBeenClicked) {
			textRef.current.fillOpacity = lerp(textRef.current.fillOpacity, 0, 0.5, 1);
			return;
		}
		if (endPos && textRef.current) {
			textRef.current.fillOpacity = lerp(textRef.current.fillOpacity, 1, 0.005);
		}
	});

	return (
		<group {...props} dispose={null}>
			<Text ref={textRef} {...fontProps} color={"#242424"} fillOpacity={0} position={[0, -1.8, -0.22]} rotation-y={Math.PI}>
				click the shirt
			</Text>
			{isActive && (
				<mesh ref={ref} onClick={handleClick} onPointerOver={handlePointerIn} onPointerOut={handlePointerOut}>
					<boxGeometry args={[3, 3, 0.5]} />
					<meshNormalMaterial transparent={true} opacity={0} />
				</mesh>
			)}
		</group>
	);
};

export default ClickTarget;
