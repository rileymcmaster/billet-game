import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "../ecctrl/Ecctrl";
import Floor from "./Floor";
import Lights from "./Lights";
import React, { useContext, useRef } from "react";
import Map from "./Map";
import Sounds from "./Sounds";

import Eyes from "./Eyes";
import AppContext from "../context/AppContext";
import Character_JRM from "./models/Character_JRM";
import DollModel from "./models/DollModel";
import DollLights from "./DollLights";

import Clock from "./models/Clock";

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

export default function Experience() {
	const character = useRef(null);

	const characterURL = "/assets/models/jrm_3_mixrig_7-transformed.glb";

	const {
		data: { allowSound },
	} = useContext(AppContext);

	return (
		<>
			{/* <Perf position="top-left" /> */}
			<fog attach="fog" color="black" near={1} far={35} />

			<Lights ref={character} />
			<Eyes />
			<Clock />
			<Character_JRM scale={0.5} position={[0, 1.45, 10]} rotate={Math.PI} animation="silly dance" />
			<Character_JRM scale={0.5} position={[-1, 3.3, -2.2]} rotate={0} animation="dance jazz" />
			<Character_JRM scale={0.5} position={[3.8, 2.12, 17]} rotate={-Math.PI / 2} animation="dance slide" />
			<DollModel />
			<DollLights />

			<Physics debug={false} timeStep="vary">
				<Map />

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
						jumpVel={3}
						jumpForceToGroundMult={42}
						slopJumpMult={0.25}
						sprintJumpMult={1.25}
						disableControl={false}
						disableFollowCam={false}
						rayOriginOffest={{ x: 0, y: -0.44, z: 0 }}
						camCollision={true} // disable camera collision detect (useless in FP mode)
						camInitDis={-2} // camera intial position
						camMinDis={-1} // camera zoom in closest position
						camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
						camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
						turnSpeed={5} // give it big turning speed to prevent turning wait time
						mode="FixedCamera">
						<EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
							<Character_JRM ref={character} />
						</EcctrlAnimation>
					</Ecctrl>
				</KeyboardControls>

				<Floor />
			</Physics>
			{allowSound && <Sounds character={character} />}
		</>
	);
}
