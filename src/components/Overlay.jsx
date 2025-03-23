import { AnimatePresence, motion } from "motion/react";
import React from "react";

const Overlay = ({ show, delay = 0 }) => {
	return <AnimatePresence>{show && <motion.div className="overlay" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay } }}></motion.div>}</AnimatePresence>;
};

export default Overlay;
