import { AnimatePresence, motion } from "motion/react";
import React from "react";

const Keys = ({ show }) => {
	return (
		<AnimatePresence>
			{show && (
				<motion.div className="keys" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					←↑→↓ - move <br /> space - jump <br /> shift - run
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Keys;
