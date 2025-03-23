import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { calculateFloat } from "../helpers/mathHelper";

const DollLights = () => {
	const target = useRef();
	const spotlight1 = useRef();
	const spotlight2 = useRef();
	const spotlightColor = useMemo(() => new THREE.Color("0xff0000"));

	useEffect(() => {
		spotlight1.current.target = target.current;
		spotlight2.current.target = target.current;
	}, [target.current]);

	let scaleRatioTally = 0;
	useFrame(({ camera }) => {
		const { ratio: scaleRatio, ratioMax: scaleRatioMax } = calculateFloat({ start: 14, end: 18, value: camera.position.z });
		if (scaleRatioMax >= 0 && scaleRatioTally < scaleRatioMax) {
			scaleRatioTally = scaleRatioMax;
		}

		if (scaleRatioMax >= 0) {
			// group.current.scale.x = THREE.MathUtils.damp(group.current.scale.x, scaleRatioTally / 2 + 4, 5, 0.5);
			// group.current.scale.y = THREE.MathUtils.damp(group.current.scale.y, scaleRatioTally / 2 + 4, 5, 0.5);
			// group.current.scale.z = THREE.MathUtils.damp(group.current.scale.z, scaleRatioTally / 2 + 4, 5, 0.5);
			// group.current.position.y = THREE.MathUtils.damp(group.current.position.y, spinRatioTally * 1 - 2.5, 0.001, 5);
			target.current.position.z = THREE.MathUtils.lerp(target.current.position.z, 24, 0.005);
			target.current.position.y = THREE.MathUtils.lerp(target.current.position.y, 4, 0.005);
			spotlight1.current.intensity = THREE.MathUtils.lerp(spotlight1.current.intensity, 100, 0.001);
			spotlight2.current.intensity = THREE.MathUtils.lerp(spotlight2.current.intensity, 100, 0.001);
		}
	});
	return (
		<group>
			<spotLight ref={spotlight1} penumbra={0.5} position={[4, 5, 20]} angle={Math.PI / 10} intensity={1} color={spotlightColor} />
			<spotLight ref={spotlight2} penumbra={0.5} position={[-4, 5, 20]} angle={Math.PI / 10} intensity={1} color={spotlightColor} />

			{/* a target for the lights to look at */}
			<mesh ref={target} scale={0.5} position={[0, 10, 40]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshNormalMaterial transparent={true} opacity={0} />
			</mesh>
		</group>
	);
};

export default DollLights;
