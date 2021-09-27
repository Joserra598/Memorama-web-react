import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Head = () => {
	const appStatus = useSelector((reducers) => reducers.appStatus);
	const player = useSelector((reducers) => reducers.playerStatus);
	console.log(player);
	return (
		<HeadContainer shadow={appStatus.game}>
			<CSSTransition in={appStatus.mainMenu} timeout={600} classNames={"main-title-"} unmountOnExit={true}>
				<HeadFigure>
					<h2>Memorama</h2>
				</HeadFigure>
			</CSSTransition>

			<CSSTransition in={appStatus.game} timeout={600} classNames={"game-title-"} mountOnEnter={true}>
				<GameTitle>
					<HeadFigure arrow>
						<h2>Jugador Actual</h2>
					</HeadFigure>

					<SwitchTransition>
						<CSSTransition key={player.currentPlayer} timeout={400} classNames={"player-label-"}>
							<PlayerLabel>
								<h2>{player.currentPlayer}</h2>
							</PlayerLabel>
						</CSSTransition>
					</SwitchTransition>
				</GameTitle>
			</CSSTransition>
		</HeadContainer>
	);
};

const HeadContainer = styled.header`
	grid-area: header;
	display: flex;
	align-items: center;
	justify-content: center;
	/* outline: 1px solid red; */
	position: relative;
	${(props) =>
		!props.shadow &&
		css`
			&::before {
				content: "";
				top: 0;
				bottom: 0;
				right: 60%;
				left: 0;
				z-index: 15;
				position: absolute;
				background: #5e3fde;
			}
		`}
`;

const GameTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* transform: rotateX(180deg); */
	&.game-title--enter {
		transform: rotateX(90deg);
		& figure:last-child {
			transform: translateX(-100%);
		}
	}
	&.game-title--enter-active {
		transform: rotateX(0deg);
		transition: 600ms ease transform;
	}
	&.game-title--enter-done {
		& figure:last-child {
			/* transform: translateX(0%); */
			transition: 400ms cubic-bezier(0, 0.55, 0.45, 1) transform;
		}
	}
`;

const PlayerLabel = styled.figure`
	padding: 0.7rem 1rem 1rem 2.5rem;
	background-color: #ffbec6;
	border-radius: 0 1.2rem 1.2rem 0;
	color: #ff4359;
	position: relative;
	z-index: 5;
	&.player-label--enter {
		transform: translateX(-110%);
	}
	&.player-label--enter-active {
		transform: translateX(0%);
		transition: 400ms ease transform;
	}

	&.player-label--exit {
		transform: translateX(0%);
	}
	&.player-label--exit-active {
		transform: translateX(-100%);
		transition: 400ms ease transform;
	}

	& > h2 {
		font-family: "Roboto", sans-serif;
		font-weight: 700;
	}
`;

const HeadFigure = styled.figure`
	background: white;
	border: none;
	border-radius: ${(props) => (props.arrow ? "1.2rem 0 0 1.2rem" : "1.2rem")};
	padding: 0.8rem 1.2rem 1rem 1rem;
	position: relative;
	z-index: 10;
	display: grid;
	place-items: center;
	color: white;
	&.main-title--exit {
		transform: translateX(0%);
	}
	&.main-title--exit-active {
		transform: translateX(-110%);
		transition: 600ms cubic-bezier(0.5, 1, 0.89, 1) transform;
		& > h2 {
			color: white;
			transition: 200ms linear color;
		}
	}

	& > h2 {
		color: rgba(0, 0, 0, 0.6);
		font-family: "Rubik", sans-serif;
		font-weight: 500;
	}

	${(props) =>
		props.arrow &&
		css`
			&::after {
				content: "";
				top: 0;
				bottom: 0;
				right: 0;
				left: 100%;
				width: 0;
				height: 0;

				position: absolute;
				border-top: 1.81rem solid transparent;
				border-bottom: 1.81rem solid transparent;
				border-right: 1.81rem solid transparent;
				border-left: 1.81rem solid white;
			}
		`}
`;

export default Head;
