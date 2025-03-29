import { Physics } from "@react-three/rapier";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import Map from "./Map";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "../ecctrl/Ecctrl";
import Character_JRM from "./models/Character_JRM";
import Floor from "./Floor";
import { useFrame } from "@react-three/fiber";

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

const characterURL = "/assets/models/jrm_3_mixrig_7-transformed.glb";

const ExperienceWorld = ({ isEnd }, ref) => {
	// const target = useRef();
	const mapRef = useRef();
	const [disableFollow, setDisableFollow] = useState(false);
	let capsuleHeight = 0.7;
	let capsuleRadius = 0.3;

	return (
		<Physics debug={false} timeStep={1 / 60}>
			<Map ref={mapRef} />

			{mapRef.current && (
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
						jumpVel={3.5}
						jumpForceToGroundMult={42}
						slopJumpMult={0.25}
						sprintJumpMult={1.3}
						disableControl={false}
						disableFollowCam={isEnd}
						// camListenerTarget={isEnd ? target : ref}

						camCollision={true}
						camInitDis={-2}
						camMinDis={-1}
						camFollowMult={1000}
						camLerpMult={1000}
						turnSpeed={5}
						// rejectVelMult={0.1}
						friction={20}
						gravityScale={1.2}
						floatingDis={0.4}
						floatHeight={capsuleHeight + 0.5} // Height of the character when floating
						capsuleHalfHeight={capsuleHeight / 2} // Half-height of the character capsule
						capsuleRadius={capsuleRadius} // Radius of the character capsule
						bodySensorSize={[capsuleHeight / 4 - 2, capsuleRadius]}
						bodySensorPosition={{ x: 0, y: 1, z: capsuleRadius / 2 }}
						characterInitDir={Math.PI}
						mode="FixedCamera">
						<EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
							<Character_JRM ref={ref} />
						</EcctrlAnimation>
					</Ecctrl>
				</KeyboardControls>
			)}

			{/* <mesh ref={target} scale={0.5} position={[0, 5, 23]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshNormalMaterial transparent={true} opacity={1} />
			</mesh> */}
			<Floor />
		</Physics>
	);
};

export default forwardRef(ExperienceWorld);
