import { Physics } from "@react-three/rapier";
import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import Map from "./Map";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "../ecctrl/Ecctrl";
import Character_JRM from "./models/Character_JRM";
import Floor from "./Floor";
import { useFrame } from "@react-three/fiber";
import Lights from "./Lights";
import AppContext from "../context/AppContext";
import Sounds from "./Sounds";
import { damp } from "maath/easing";
import ClickTarget from "./ClickTarget";

const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["Shift"] },
];

const animationSet = {
	jump: "jump joy",
	idle: "idle",
	walk: "walk",
	run: "drunk run",
	jumpIdle: "jump_land",
	jumpLand: "jump_land",
	crawl: "crawl",
	danceJazz: "dance jazz",
	danceSlide: "dance slide",
	danceSilly: "silly dance",
};

const characterURL = "/assets/models/jrm_3_mixrig_8-transformed.glb";

const ExperienceWorld = () => {
	const ref = useRef(null);
	const ecctrlRef = useRef(null);
	const mapRef = useRef();
	let capsuleHeight = 0.7;
	let capsuleRadius = 0.3;

	const {
		data: { allowSound, isCharacter, isSound, isEnd },
		actions: { handleEnd },
	} = useContext(AppContext);

	useEffect(() => {
		if (!ecctrlRef.current) return;
		if (isEnd) {
			console.log("should call rot cam");
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
			<ClickTarget show={isEnd} position={[0, 4, 24]} />
			<Physics debug={true} timeStep={"vary"}>
				<Map ref={mapRef} />

				{isCharacter && (
					<>
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
								slopJumpMult={0.25}
								sprintJumpMult={1.3}
								disableControl={false}
								// disableFollowCam={isEnd}
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
								floatingDis={1.2}
								floatHeight={capsuleHeight - 2} // Height of the character when floating
								capsuleHalfHeight={capsuleHeight / 2} // Half-height of the character capsule
								capsuleRadius={capsuleRadius} // Radius of the character capsule
								characterInitDir={Math.PI}
								mode="FixedCamera"
								ref={ecctrlRef}>
								{/* <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}> */}
								<Character_JRM animationSet={animationSet} ref={ref} />
								{/* </EcctrlAnimation> */}
							</Ecctrl>
						</KeyboardControls>
					</>
				)}

				<Floor />
			</Physics>
			{isCharacter && <Lights ref={ref} />}
			{allowSound && isCharacter && <Sounds ref={ref} />}
		</>
	);
};

export default ExperienceWorld;
