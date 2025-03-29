import { useCursor } from "@react-three/drei";
import React, { useContext, useRef, useState } from "react";
import AppContext from "../context/AppContext";

const ClickTarget = (props) => {
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
		handleOpenModal();
	};

	return (
		<mesh ref={ref} {...props} onClick={handleClick} onPointerOver={handlePointerIn} onPointerOut={handlePointerOut}>
			<boxGeometry args={[3, 3, 0.5]} />
			<meshNormalMaterial transparent={true} opacity={0} />
		</mesh>
	);
};

export default ClickTarget;
