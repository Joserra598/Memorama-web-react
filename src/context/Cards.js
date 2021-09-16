import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
	const [cardsReveled, handleCards] = useState({ current: null, total: [] });
	return <CardContext.Provider value={[cardsReveled, handleCards]}>{children}</CardContext.Provider>;
};
