import { Physics } from "@react-three/rapier";
import React, { useContext, useEffect, useRef, lazy, Suspense } from "react";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl from "../../ecctrl/Ecctrl";
import { useFrame } from "@react-three/fiber";
import AppContext from "../../context/AppContext";

import Character_JRM from "../models/Character_JRM";
import Map from "./Map";
import Floor from "./Floor";
import Sounds from "../Sounds/Sounds";
const Lights = lazy(() => import("./Lights"));
const ClickTarget = lazy(() => import("./ClickTarget"));

const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["Shift"] },
];

const ExperienceWorld = () => {
	const ref = useRef(null);
	const ecctrlRef = useRef(null);
	let capsuleHeight = 0.7;
	let capsuleRadius = 0.3;

	const {
		data: { isEnd },
		actions: { handleEnd },
	} = useContext(AppContext);

	useEffect(() => {
		if (!ecctrlRef.current) return;
		if (isEnd) {
			ecctrlRef.current.disableFollowCam = true;
			ecctrlRef.current.rotateCamera(-0.125, 0);
		} else if (isEnd === false) {
			ecctrlRef.current.disableFollowCam = false;
			ecctrlRef.current.rotateCamera(0.125, 0);
		}
	}, [isEnd]);

	useFrame(() => {
		if (!ecctrlRef.current) return;
		const { z } = ecctrlRef.current.translation();
		const isLocalEnd = z > 22;

		if (isLocalEnd) {
			handleEnd(true);
		} else if (isEnd && !isLocalEnd) {
			handleEnd(false);
		}
	});

	return (
		<>
			<Physics debug={false} timeStep={"vary"}>
				<KeyboardControls map={keyboardMap}>
					<Ecctrl
						// debug
						animated
						followLight
						springK={2}
						dampingC={0.2}
						maxVelLimit={0.81}
						turnVelMultiplier={0.09}
						sprintMult={2.9}
						jumpVel={4.5}
						jumpForceToGroundMult={42}
						slopeDownExtraForce={0}
						slopeUpExtraForce={0}
						slopeMaxAngle={Math.PI}
						slopJumpMult={0.25}
						sprintJumpMult={1.3}
						disableControl={false}
						enabledRotations={[true, true, false]}
						camCollision={false}
						camInitDis={-2.5}
						camMinDis={-1}
						camLowLimit={-1.5}
						camUpLimit={1.5}
						camFollowMult={1000}
						camLerpMult={1000}
						turnSpeed={5}
						friction={20}
						gravityScale={1.2}
						fixedCamRotMult={2}
						floatingDis={0.8}
						floatHeight={capsuleHeight + 1.1} // Height of the character when floating
						capsuleHalfHeight={0.29} // Half-height of the charawcter capsule
						capsuleRadius={capsuleRadius} // Radius of the character capsule
						characterInitDir={Math.PI}
						position={[0, 10, 0]}
						mode="FixedCamera"
						ref={ecctrlRef}
						ccd>
						<Character_JRM ref={ref} />
					</Ecctrl>
				</KeyboardControls>

				<directionalLight position={[5, 0, 1]} intensity={1.5} target={ref.current} name="followLight" />
				<Floor />
				<Map />
			</Physics>

			<Lights />
			<ClickTarget position={[0, 4, 23]} />

			<Sounds ecctrlRef={ecctrlRef} ref={ref} />
		</>
	);
};

export default ExperienceWorld;
