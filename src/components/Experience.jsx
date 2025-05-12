import React, { useMemo, lazy } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";

import Instructions from "./Menus/Instructions";
import ExperienceWorld from "./World/ExperienceWorld";
import BackgroundCharacters from "./World/BackgroundCharacters";

const DollModel = lazy(() => import("./models/DollModel"));
const DollLights = lazy(() => import("./World/DollLights"));
const Bike = lazy(() => import("./models/Bike"));
const Clock = lazy(() => import("./models/Clock"));
const Eyes = lazy(() => import("./World/Eyes"));

export default function Experience() {
	const fogColor = useMemo(() => new THREE.Color("#101010"));

	return (
		<>
			{/* <Perf position="top-left" deepAnalyze={true} matrixUpdate={true} /> */}
			<fog attach="fog" color={fogColor} near={1} far={20} />

			<ExperienceWorld />

			<Instructions />

			<Eyes />
			<Clock />
			<Bike />

			<DollModel />
			<DollLights />

			<BackgroundCharacters />
		</>
	);
}
