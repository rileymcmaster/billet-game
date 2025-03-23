import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const END_POS = 12;
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

	const data = { allowSound, END_POS, start, showModal };
	const actions = { handleSound, handleStart, handleOpenModal, handleCloseModal };

	return <AppContext.Provider value={{ data, actions }}>{children}</AppContext.Provider>;
};

export default AppContext;
