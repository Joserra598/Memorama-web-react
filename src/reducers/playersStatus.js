const playerInit = {
	currentPlayer: "P1",
	P1Points: 0,
	P2Points: 0,
};

const playerStatus = (estado = playerInit, action) => {
	switch (action.type) {
		case "CHANGE":
			return estado.currentPlayer === "P1" ? { ...estado, currentPlayer: "P2" } : { ...estado, currentPlayer: "P1" };
		case "P1POINT":
			return { ...estado, P1Points: estado.P1Points + 1 };
		case "P2POINT":
			return { ...estado, P2Points: estado.P2Points + 1 };
		default:
			return estado;
	}
};

export default playerStatus;
