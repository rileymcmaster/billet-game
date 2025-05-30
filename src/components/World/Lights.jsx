import React, { Suspense, useEffect } from "react";
import { useRef } from "react";

const Lights = (props) => {
	const pointLightRef = useRef();
	const ambientLightRef = useRef();
	const spotLightRef = useRef();
	const spotLightTarget2 = useRef();

	useEffect(() => {
		if (!spotLightRef.current || !spotLightTarget2.current) return;

		spotLightRef.current.target = spotLightTarget2.current;
	}, [spotLightRef.current, spotLightTarget2.current]);

	return (
		<Suspense fallback={null}>
			<pointLight position={[0, 5, -5]} intensity={5} name="lamp" />
			<pointLight position={[0, 5, 2]} intensity={10} name="lamp" />
			<pointLight position={[2.5, 4.4, 9.5]} intensity={8} name="lamp" />
			<pointLight position={[2.5, 5, 16]} intensity={5} name="lamp" />
			<pointLight position={[-2, 1, 20]} intensity={6} ref={pointLightRef} name="lamp" />

			<spotLight ref={spotLightRef} position={[0, 6, 10]} intensity={60} angle={Math.PI / 4} penumbra={1} />
			<mesh ref={spotLightTarget2} position={[0, 2, 10]}>
				{/* <boxGeometry args={[1, 1, 1]} />
				<meshNormalMaterial /> */}
			</mesh>

			<ambientLight ref={ambientLightRef} intensity={1} color={"#b1a593"} />
		</Suspense>
	);
};

export default Lights;
