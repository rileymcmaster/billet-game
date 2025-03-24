import React, { forwardRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Lights = (props, ref) => {
	const directionalLightRef = useRef();
	const pointLightRef = useRef();
	const ambientLightRef = useRef();
	const spotLightRef = useRef();
	const spotLightTarget2 = useRef();

	// useHelper(pointLightRef, THREE.PointLightHelper, 1);
	useEffect(() => {
		spotLightRef.current.target = spotLightTarget2.current;
	}, [spotLightRef.current]);
	return (
		<>
			<directionalLight position={[5, 0, 1]} intensity={1.5} target={ref.current} name="followLight" ref={directionalLightRef} />

			<pointLight position={[0, 5, -5]} intensity={5} name="lamp" />
			<pointLight position={[0, 5, 2]} intensity={10} name="lamp" />
			<pointLight position={[2.5, 4.4, 9.5]} intensity={8} name="lamp" />
			<pointLight position={[2.5, 5, 16]} intensity={5} name="lamp" />
			<pointLight position={[-2, 1, 20]} intensity={6} ref={pointLightRef} name="lamp" />

			{/* <spotLight position={[0, 6, -0.5]} intensity={40} angle={Math.PI / 6} aw penumbra={0.5} /> */}
			<spotLight ref={spotLightRef} position={[0, 6, 10]} intensity={60} angle={Math.PI / 4} penumbra={1} />
			<mesh ref={spotLightTarget2} position={[0, 2, 10]}>
				{/* <boxGeometry args={[1, 1, 1]} />
				<meshNormalMaterial /> */}
			</mesh>

			<ambientLight ref={ambientLightRef} intensity={1} color={"#b1a593"} />
		</>
	);
};

export default forwardRef(Lights);
