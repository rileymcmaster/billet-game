import { Leva } from "leva";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { EcctrlJoystick } from "../ecctrl/EcctrlJoystick";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Experience from "./Experience";
import IntroPage from "../pages/IntroPage";
import AppContext from "../context/AppContext";
import Modal from "../pages/Modal";

const EcctrlJoystickControls = (props) => {
	const [isTouchScreen, setIsTouchScreen] = useState(false);

	useEffect(() => {
		// Check if using a touch control device, show/hide joystick
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			setIsTouchScreen(true);
		} else {
			setIsTouchScreen(false);
		}
	}, []);
	return <>{isTouchScreen && <EcctrlJoystick joystickRunSensitivity={0.2} buttonNumber={1} />}</>;
};

const Game = () => {
	const {
		data: { start },
	} = useContext(AppContext);
	return (
		<>
			{/* <Leva collapsed /> */}
			{start && <EcctrlJoystickControls />}
			<Canvas
				style={{ width: "100%", position: "absolute", maxWidth: "1500px", marginInline: "auto", maxHeight: "1200px" }}
				camera={{
					fov: 75,
					near: 0.1,
					far: 55,
				}}>
				<Suspense fallback={null}>
					<Experience />
				</Suspense>
			</Canvas>
			<IntroPage />
			<Modal />
		</>
	);
};

export default Game;
