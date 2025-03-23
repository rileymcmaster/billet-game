import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";

import { EcctrlJoystick } from "../../ecctrl/EcctrlJoystick";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Experience from "./Experience";
import IntroPage from "../pages/IntroPage";
import AppContext from "../context/AppContext";
import Modal from "../pages/Modal";

const EcctrlJoystickControls = () => {
	const [isTouchScreen, setIsTouchScreen] = useState(false);
	useEffect(() => {
		// Check if using a touch control device, show/hide joystick
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			setIsTouchScreen(true);
		} else {
			setIsTouchScreen(false);
		}
	}, []);
	return <>{isTouchScreen && <EcctrlJoystick buttonNumber={1} />}</>;
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
				camera={{
					fov: 85,
					near: 0.1,
					far: 1000,
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
