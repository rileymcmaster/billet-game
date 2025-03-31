import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "../ecctrl/Ecctrl";
import Floor from "./Floor";
import Lights from "./Lights";
import React, { useContext, useMemo, useRef, useState, lazy, Suspense } from "react";
import Map from "./Map";
import Sounds from "./Sounds";

import * as THREE from "three";
import AppContext from "../context/AppContext";

// import Clock from "./models/Clock";
import Instructions from "./Instructions";
import ExperienceWorld from "./ExperienceWorld";

import Character_JRM from "./models/Character_JRM";

const DollModel = lazy(() => import("./models/DollModel"));
const DollLights = lazy(() => import("./DollLights"));
const Bike = lazy(() => import("./models/Bike"));
const Clock = lazy(() => import("./models/Clock"));
const Eyes = lazy(() => import("./Eyes"));

export default function Experience() {
	const fogColor = useMemo(() => new THREE.Color("#101010"));

	const {
		data: { allowSound, isCharacter },
	} = useContext(AppContext);

	return (
		<>
			{/* <Perf position="top-left" deepAnalyze={true} matrixUpdate={true} /> */}
			<fog attach="fog" color={fogColor} near={1} far={20} />

			<ExperienceWorld />
			{isCharacter && (
				<>
					<Eyes />
					<Clock />
					<Bike />

					<Instructions />
					<DollModel />
					<DollLights />
					<Character_JRM scale={0.5} position={[0, 1.9, 10]} rotate={Math.PI} animation="silly dance" />
					<Character_JRM scale={0.5} position={[-1, 3.75, -2.2]} rotate={0} animation="dance jazz" />
					<Character_JRM scale={0.5} position={[3.8, 2.55, 17]} rotate={-Math.PI / 2} animation="dance slide" />
				</>
			)}
		</>
	);
}
