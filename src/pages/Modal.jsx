import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AppContext from "../context/AppContext";
import Overlay from "../components/Overlay";

const href = "https://billet.bigcartel.com";

const Modal = ({}) => {
	const {
		data: { showModal },
		actions: { handleCloseModal },
	} = useContext(AppContext);

	useEffect(() => {
		const handleKeypress = (e) => {
			if (e.key === "Escape") {
				handleCloseModal();
			}
		};
		document.addEventListener("keydown", handleKeypress);
		return () => document.removeEventListener("keydown", handleKeypress);
	}, []);

	return (
		<>
			<Overlay show={showModal} />
			<AnimatePresence>
				{showModal && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="menu">
						<button className="menu__close-btn" onClick={handleCloseModal}>
							X
						</button>
						<div className="menu__content">
							<p>Congrats! You've done it!</p>
							<a href={href} target="_blank">
								Open in new tab
							</a>
							<div className="iframe-wrapper">
								<div className="loader"></div>
								<iframe src={href} />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
