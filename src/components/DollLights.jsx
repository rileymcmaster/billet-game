import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { calculateFloat } from "../helpers/mathHelper";

const DollLights = () => {
	const target = useRef();
	const pointLight1 = useRef();

	let scaleRatioTally = 0;
	useFrame(({ camera }, delta) => {
		const { ratio: scaleRatio, ratioMax: scaleRatioMax } = calculateFloat({ start: 14, end: 18, value: camera.position.z });
		if (scaleRatioMax >= 0 && scaleRatioTally < scaleRatioMax) {
			scaleRatioTally = scaleRatioMax;
		}
		if (scaleRatioMax >= 0) {
			pointLight1.current.intensity = THREE.MathUtils.lerp(pointLight1.current.intensity, scaleRatioMax * 16, 0.001);
		}

		return null;
	});
	return (
		<group>
			<pointLight position={[0, 3.2, 22]} intensity={0} ref={pointLight1} name="lamp" />
			{/* a target for the lights to look at */}
			<mesh ref={target} scale={0.5} position={[0, 3.5, 23]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshNormalMaterial transparent={true} opacity={0} />
			</mesh>
		</group>
	);
};

export default DollLights;
