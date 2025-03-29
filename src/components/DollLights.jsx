import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { calculateFloat } from "../helpers/mathHelper";
import { useHelper } from "@react-three/drei";
import { useFollowCam, useGame } from "../ecctrl/Ecctrl";
import { easing } from "maath";
import { dampAngle, dampLookAt } from "maath/easing";

const DollLights = () => {
	const target = useRef();
	const spotlight1 = useRef();
	const spotlight2 = useRef();
	const pointLight1 = useRef();
	const color = "#d7e4e8";
	const colorValue = parseInt(color.replace("#", "0x"), 16);
	const vec = useMemo(() => new THREE.Vector3(), []);

	// useHelper(pointLight1, THREE.PointLightHelper, 1);
	const spotlightColor = useMemo(() => new THREE.Color(colorValue));
	const camera = useThree((state) => state.camera);

	useEffect(() => {
		// console.log("camera", camera);
		// camera.getWorldDirection(vec);
		// camera.position = easing.damp(2, 4, 2, 2);
		// 	if (!spotlight1.current || !target.current) return;
		// 	spotlight1.current.target = target.current;
		// 	spotlight2.current.target = target.current;
	}, [target.current]);

	let scaleRatioTally = 0;
	useFrame(({ camera }, delta) => {
		// camera.position.lerp(0, Math.sin(camera.position.y), camera.position.z, 0.005);
		const { ratio: scaleRatio, ratioMax: scaleRatioMax } = calculateFloat({ start: 14, end: 18, value: camera.position.z });
		if (scaleRatioMax >= 0 && scaleRatioTally < scaleRatioMax) {
			scaleRatioTally = scaleRatioMax;
		}
		// console.log({ vec, camera, y: vec.y });
		if (scaleRatioMax >= 0) {
			pointLight1.current.intensity = THREE.MathUtils.lerp(pointLight1.current.intensity, scaleRatioMax * 18, 0.001);
		}

		return null;
	});
	return (
		<group>
			{/* <spotLight ref={spotlight1} penumbra={0.5} position={[4, 5, 20]} angle={Math.PI / 10} intensity={1} color={spotlightColor} /> */}
			{/* <spotLight ref={spotlight2} penumbra={0.5} position={[-4, 5, 20]} angle={Math.PI / 10} intensity={1} color={spotlightColor} /> */}
			<pointLight position={[0, 3.3, 23]} intensity={0} ref={pointLight1} name="lamp" />
			{/* a target for the lights to look at */}
			{/* <mesh ref={target} scale={0.5} position={[0, 10, 40]}> */}
			<mesh ref={target} scale={0.5} position={[0, 3.5, 23]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshNormalMaterial transparent={true} opacity={0} />
			</mesh>
		</group>
	);
};

export default DollLights;
