import Tablero from "./Tablero";
import Inicio from "./Inicio";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../actions";

const MainSection = () => {
	const gameStatus = useSelector((reduce) => reduce.appStatus);
	const dispatch = useDispatch();
	return (
		<MainSectioStyle>
			<CSSTransition
				in={gameStatus.mainMenu}
				timeout={800}
				classNames={"init-page-"}
				unmountOnExit={true}
				onExited={() => dispatch(gameActions.loadGame())}
			>
				<Inicio />
			</CSSTransition>
			<CSSTransition
				in={gameStatus.game}
				timeout={1500}
				classNames={"show-panel-"}
				mountOnEnter={true}
				unmountOnExit={true}
			>
				<Tablero />
			</CSSTransition>
		</MainSectioStyle>
	);
};

const MainSectioStyle = styled.section`
	display: grid;
	place-items: center;
	grid-area: mainS;
`;

export default MainSection;
