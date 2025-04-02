import { useProgress } from "@react-three/drei";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import Overlay from "../components/Overlay";
import Menu from "../components/Menu";

const IntroPage = () => {
	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const {
		data: { start },
		actions: { handleSound, handleStart },
	} = useContext(AppContext);
	const { progress } = useProgress();
	const isLoaded = progress >= 100;

	useEffect(() => {
		const handleKeypress = (e) => {
			if (e.key === "Escape") {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleKeypress);
		return () => document.removeEventListener("keydown", handleKeypress);
	}, []);
	const handleAcceptSound = () => {
		handleSound(true);
		handleStart();
	};

	const handleMute = () => {
		handleSound(false);
		handleStart();
	};

	const handleOpenMenu = () => {
		if (!start) return;

		setIsMenuOpen(!isMenuOpen);
	};
	const handleCloseMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<Menu show={start && isMenuOpen} onClose={handleCloseMenu} />
			<div className="intro">
				<motion.div
					className="title-container"
					layout
					style={{ position: start ? "fixed" : "realtive", top: start ? 0 : "default", left: start ? 0 : "default", scale: start ? 0.5 : 1, translate: start ? "-20% -20%" : 0 }}
					role="button"
					onClick={handleOpenMenu}>
					<h1 className={`alt hero-title ${start ? "clickable" : ""} ${isMenuOpen ? "background" : ""}`}>Billet</h1>
				</motion.div>

				{/* first page */}
				{/* <Overlay show={!start} delay={0.2} /> */}
				{/* menu */}

				<AnimatePresence>
					{!start && (
						<motion.div animate={{ opacity: 1 }} initial={{opacity: 1}} exit={{ opacity: 0 }} className="intro__content">
							<div className="intro__content__container">
								<p>Welcome to the basement</p>
								<p>An interactive game where it is your goal to find the new Billet t-shirt. Best experienced with sound on.</p>

								{isDesktop ? (
									<p>
										←↑→↓ <br />
										Use the arrow keys to move <br />
										Hold shift to run <br />
										Press space bar to jump
									</p>
								) : (
									<p>Use the joystick to move and the button to jump</p>
								)}
								<div className="button-container">
									<button className={`button ${isLoaded ? "loaded" : ""}`} disabled={!isLoaded} onClick={handleAcceptSound}>
										<motion.span className="loading" style={{ width: `${progress}%` }}></motion.span>
										<span className="message--default">ENTER WITH SOUND</span>
										<span className="message--loading">loading...</span>
									</button>

									<button className={`button--alt ${isLoaded ? "loaded" : ""}`} onClick={handleMute}>
										without sound
									</button>
								</div>
								<p className="small-text">
									<a href="mailto:billetmusic@gmail.com">billetmusic@gmail.com</a> <br /> 2025
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default IntroPage;
