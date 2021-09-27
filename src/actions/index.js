export const gameActions = (() => {
	return {
		hideMenu() {
			return { type: "HIDEMENU" };
		},
		loadGame() {
			return { type: "LOADGAME" };
		},
	};
})();

export const panelActions = (() => {
	return {
		reset() {
			return { type: "RESET" };
		},
		found(id) {
			return { type: "FOUND", newImg: id };
		},
		serching(chosse) {
			return { type: "SERCHING", chosee: +chosse };
		},
	};
})();

export const playerActions = (() => {
	return {
		changePlayer() {
			return { type: "CHANGE" };
		},
		pointP1() {
			return { type: "P1POINT" };
		},
		pointP2() {
			return { type: "P2POINT" };
		},
	};
})();
