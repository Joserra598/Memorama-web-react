const cardsInit = {
	current: null,
	total: [],
};

const cardsStatus = (estado = cardsInit, action) => {
	switch (action.type) {
		case "RESET":
			return { ...estado, current: null };
		case "FOUND":
			return { total: [...estado.total, action.newImg], current: null };
		case "SERCHING":
			return { ...estado, current: action.chosee };
		default:
			return estado;
	}
};

export default cardsStatus;
