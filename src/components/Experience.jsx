import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "../ecctrl/Ecctrl";
import Floor from "./Floor";
import Lights from "./Lights";
import React, { useContext, useMemo, useRef, useState } from "react";
import Map from "./Map";
import Sounds from "./Sounds";

import * as THREE from "three";
import Eyes from "./Eyes";
import AppContext from "../context/AppContext";
import Character_JRM from "./models/Character_JRM";
import DollModel from "./models/DollModel";
import DollLights from "./DollLights";

import Clock from "./models/Clock";
import Instructions from "./Instructions";
import Bike from "./models/Bike";
import ExperienceWorld from "./ExperienceWorld";

// const keyboardMap = [
// 	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
// 	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
// 	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
// 	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
// 	{ name: "jump", keys: ["Space"] },
// 	{ name: "run", keys: ["Shift"] },
// ];

// const animationSet = {
// 	jump: "jump joy",
// 	idle: "idle",
// 	walk: "walk",
// 	run: "drunk run",
// 	jumpIdle: "jump_land",
// 	jumpLand: "jump_land",
// 	crawl: "crawl",
// 	danceJazz: "dance jazz",
// 	danceSlide: "dance slide",
// 	danceSilly: "silly dance",
// };

export default function Experience() {
	const fogColor = useMemo(() => new THREE.Color("#101010"));
	// const character = useRef(null);

	// const characterURL = "/assets/models/jrm_3_mixrig_7-transformed.glb";

	const {
		data: { allowSound },
	} = useContext(AppContext);

	return (
		<>
			<Perf position="top-left" deepAnalyze={true} matrixUpdate={true} />
			<fog attach="fog" color={fogColor} near={1} far={20} />

			<Eyes />
			<Clock />
			{/* <Bike /> */}
			<Instructions />
			{/* <Character_JRM scale={0.5} position={[0, 1.45, 10]} rotate={Math.PI} animation="silly dance" />
			<Character_JRM scale={0.5} position={[-1, 3.3, -2.2]} rotate={0} animation="dance jazz" />
			<Character_JRM scale={0.5} position={[3.8, 2.12, 17]} rotate={-Math.PI / 2} animation="dance slide" /> */}
			<DollModel />
			<DollLights />
			<ExperienceWorld />
		</>
	);
}
