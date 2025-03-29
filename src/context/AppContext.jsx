import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const END_POS = 12;
	const [isEnd, setIsEnd] = useState(null);
	const [allowSound, setAllowSound] = useState(false);
	const [start, setStart] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [loadingStage, setLoadingStage] = useState(0);

	
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

	const handleLoadMap = () => {
		if (loadingStage > 0) return;
		setLoadingStage(1);
	};
	const handleLoadCharacter = () => {
		if (loadingStage > 1) return;
		setLoadingStage(2);
	};
	const handleLoadSound = () => {
		if (loadingStage > 2) return;
		setLoadingStage(3);
	};

	const handleEnd = (end = true) => {
		setIsEnd(end);
	}

	const isMap = loadingStage === 1;
	const isCharacter = loadingStage <= 2;
	const isSound = loadingStage <= 3;

	const data = { allowSound, END_POS, start, showModal, isMap, isCharacter, isSound, loadingStage, isEnd };
	const actions = { handleSound, handleStart, handleOpenModal, handleCloseModal, handleLoadMap, handleLoadCharacter, handleLoadSound, handleEnd };

	return <AppContext.Provider value={{ data, actions }}>{children}</AppContext.Provider>;
};

export default AppContext;
