import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Question } from "../images/Icons/questionLogo.svg";
import { useSelector, useDispatch } from "react-redux";
import { panelActions, playerActions } from "../actions";

const PanelCard = ({ image, Tablero }) => {
	const [viewCard, hiddenCard] = useState(true);
	const [hideCard, showCard] = useState(false);
	const cardsStatus = useSelector((reducers) => reducers.cardsStatus);
	const player = useSelector((reducer) => reducer.playerStatus);
	const dispatch = useDispatch();

	useEffect(() => {
		const { total, current } = cardsStatus;

		if (current) return;
		if (total.includes(image.id)) return;
		if (!hideCard) return;

		showCard(false);
	}, [cardsStatus, image]);

	const timeAwait = () => {
		return new Promise((resolve) => {
			setTimeout(resolve, 850);
		});
	};

	const handleRevealIcon = async (e) => {
		// las primeras tres lineas son necesarias para que funcione el programa
		const idCurrent = e.target.closest("div").dataset.id;
		hiddenCard(false);
		const { current: TABLERO } = Tablero;

		TABLERO.style.pointerEvents = "none";
		await timeAwait();
		TABLERO.style.pointerEvents = "auto";

		if (cardsStatus.current) {
			if (cardsStatus.current === image.id) {
				dispatch(panelActions.found(image.id));
				// Para poder agregar un punto es necesario saber el jugador
				if (player.currentPlayer === "P1") dispatch(playerActions.pointP1());
				if (player.currentPlayer === "P2") dispatch(playerActions.pointP2());
			} else {
				dispatch(panelActions.reset());
				dispatch(playerActions.changePlayer());
			}
		} else {
			dispatch(panelActions.serching(idCurrent));
		}
	};

	return (
		<>
			{/* Igcognita */}
			<CSSTransition
				in={viewCard}
				timeout={{ exit: 400, enter: 300 }}
				classNames={"unknow-card-"}
				onExited={() => showCard(true)}
				unmountOnExit={true}
				mountOnEnter={true}
			>
				<Panel onClick={(e) => handleRevealIcon(e)} hide data-id={image.id}>
					<Question />
				</Panel>
			</CSSTransition>
			{/* Imagen a la vista */}
			<CSSTransition
				in={hideCard}
				timeout={{ enter: 400, exit: 300 }}
				classNames={"know-card"}
				mountOnEnter={true}
				unmountOnExit={true}
				onExited={() => hiddenCard(true)}
			>
				<Panel>
					<img src={`${image.route}`} alt="Icon" />
				</Panel>
			</CSSTransition>
		</>
	);
};

const Panel = styled.div`
	background: ${(props) => (props.hide ? "#99aab5" : "white")};
	border-radius: 1.2em;
	transition: 300ms cubic-bezier(0.33, 1, 0.68, 1) background-color, transform 300ms cubic-bezier(0.11, 0, 0.5, 0);
	display: grid;
	place-items: center;
	/* pointer-events: none; */
	& > img {
		width: 50%;
		opacity: 0.65;
		transition: 300ms ease opacity;
	}
	& > svg {
		fill: white;
		transform: scale(2);
	}

	&:hover {
		background-color: ${(props) => (props.hide ? "#f6c768" : "#f3ebeb")};
		transform: rotateX(-25deg);
		cursor: pointer;
	}
	/* Tarjeta de desconocida a conocida  quitando ? */
	&.unknow-card--exit {
		transform: rotateX(-30deg);
	}
	&.unknow-card--exit-active {
		transition: cubic-bezier(0.16, 1, 0.3, 1) 400ms transform;
		transform: rotateX(-90deg);
	}

	/* Tarjeta de desconocida a conocida Poniendo imagen*/
	&.know-card-enter {
		transform: rotateX(90deg);
	}
	&.know-card-enter-active {
		transition: cubic-bezier(0.34, 1.56, 0.64, 1) 400ms transform;
		transform: rotateX(0deg);
	}

	/* Tarjeta de conocida a desconocida quitando imgaen*/
	&.know-card-exit {
		transform: rotateX(0deg);
	}
	&.know-card-exit-active {
		transform: rotateX(-90deg);
		transition: 300ms cubic-bezier(0.12, 0, 0.39, 0) transform;
	}

	/* Tarjeta de conocida a Desconocida Poniendo ?*/
	&.unknow-card--enter {
		transform: rotateX(-90deg);
	}
	&.unknow-card--enter-active {
		transform: rotateX(0deg);
		transition: 300ms cubic-bezier(0.12, 0, 0.39, 0) transform;
	}
`;

export default PanelCard;
