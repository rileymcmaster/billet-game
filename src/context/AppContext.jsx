import React, { createContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const END_POS = 12;
	const [isEnd, setIsEnd] = useState(null);
	const [allowSound, setAllowSound] = useState(false);
	const [start, setStart] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleSound = (peep) => {
		setAllowSound(peep);
	};
	const handleStart = () => {
		setStart(true);
	};
	const handleOpenModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleEnd = (end = true) => {
		setIsEnd(end);
	};

	const data = { allowSound, END_POS, start, showModal, isEnd };
	const actions = { handleSound, handleStart, handleOpenModal, handleCloseModal, handleEnd };

	return <AppContext.Provider value={{ data, actions }}>{children}</AppContext.Provider>;
};

export default AppContext;
