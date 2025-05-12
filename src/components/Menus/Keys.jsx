import { AnimatePresence, motion } from "motion/react";
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Keys = ({ show }) => {
	const {
		data: { allowSound },
		actions: { handleSound },
	} = useContext(AppContext);

	const handleToggleSound = () => {
		handleSound(!allowSound);
	};
	return (
		<AnimatePresence>
			{show && (
				<motion.div className="keys" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					<span onClick={handleToggleSound} className={`icon__speaker${allowSound ? "" : "--mute"}`} />
					<br />
					←↑→↓ - move <br /> space - jump <br /> shift - run
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Keys;
