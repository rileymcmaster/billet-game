import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Html } from "@react-three/drei";
import AppContext from "../context/AppContext";
import Overlay from "../components/Overlay";

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
						<iframe className="menu__content" src="https://billet.bandcamp.com/album/debris" />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
