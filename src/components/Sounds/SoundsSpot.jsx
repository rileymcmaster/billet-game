import { PositionalAudio } from "@react-three/drei";
import React, { forwardRef } from "react";

const SoundsSpot = ({ spot }, ref) => {
	const { position, file, color, distance = 3 } = spot;

	return (
		<mesh position={position}>
			{/* <boxGeometry args={[0.2, 0.2, 0.2]} /> */}
			{/* <meshBasicMaterial color={color} /> */}
			<PositionalAudio ref={ref} url={file} distance={distance} loop />
		</mesh>
	);
};

export default forwardRef(SoundsSpot);
