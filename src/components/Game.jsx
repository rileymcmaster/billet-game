import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";

import { EcctrlJoystick } from "../ecctrl/EcctrlJoystick";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Experience from "./Experience";
import IntroPage from "../pages/IntroPage";
import AppContext from "../context/AppContext";
import Modal from "../pages/Modal";
import Keys from "./Keys";

const EcctrlJoystickControls = ({ show }) => {
	return <>{show && <EcctrlJoystick joystickRunSensitivity={0.2} buttonNumber={1} />}</>;
};

const Game = () => {
	const [isTouchScreen, setIsTouchScreen] = useState(false);

	useEffect(() => {
		// Check if using a touch control device, show/hide joystick
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			setIsTouchScreen(true);
		} else {
			setIsTouchScreen(false);
		}
	}, []);
	const {
		data: { start },
	} = useContext(AppContext);
	return (
		<div className="game-wrapper">
			{/* <Leva collapsed /> */}
			<EcctrlJoystickControls show={start && isTouchScreen} />
			<IntroPage />
			<Modal />
			<Keys show={start && !isTouchScreen} />
			<Canvas
				style={{ width: "100%", position: "absolute", maxWidth: "1500px", marginInline: "auto", maxHeight: "1200px" }}
				camera={{
					fov: 75,
					near: 0.1,
					far: 55,
				}}>
				<Experience />
			</Canvas>
		</div>
	);
};

export default Game;
