const AppStatus = {
	game: false,
	mainMenu: true,
};

const appStatus = (estado = AppStatus, action) => {
	switch (action.type) {
		case "HIDEMENU":
			return { ...estado, mainMenu: false };
		case "LOADGAME":
			return { ...estado, game: true };
		default:
			return estado;
	}
};

export default appStatus;
