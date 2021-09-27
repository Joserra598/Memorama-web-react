import styled from "styled-components";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSelector } from "react-redux";

const Score = ({ player }) => {
	const gameStatus = useSelector((reduce) => reduce.appStatus);
	const playerStatus = useSelector((reduce) => reduce.playerStatus);
	return (
		<CSSTransition in={gameStatus.game} timeout={800} classNames={"score-space-"} mountOnEnter={true}>
			<ScoreSpace player={player}>
				<PlayerName>{player}</PlayerName>
				<ScoreFigure>
					{player === "Player 1" && (
						<SwitchTransition>
							<CSSTransition
								key={playerStatus.P1Points}
								timeout={{ enter: 400, exit: 600 }}
								classNames={"score-value-"}
							>
								<ScoreValue>{playerStatus.P1Points}</ScoreValue>
							</CSSTransition>
						</SwitchTransition>
					)}
					{player === "Player 2" && (
						<SwitchTransition>
							<CSSTransition
								key={playerStatus.P2Points}
								timeout={{ enter: 400, exit: 600 }}
								classNames={"score-value-"}
							>
								<ScoreValue>{playerStatus.P2Points}</ScoreValue>
							</CSSTransition>
						</SwitchTransition>
					)}
				</ScoreFigure>
			</ScoreSpace>
		</CSSTransition>
	);
};

const ScoreSpace = styled.section`
	grid-area: ${(props) => (props.player === "Player 1" ? "sideL" : "sideR")};
	display: grid;
	place-items: center;
	align-content: center;
	gap: 2.5rem;
	&.score-space--enter {
		transform: scale(0.3) rotateZ(45deg);
	}
	&.score-space--enter-active {
		transform: scale(1) rotateZ(0deg);
		transition: 800ms cubic-bezier(0.68, -0.6, 0.32, 1.6) transform;
	}
`;

const PlayerName = styled.h2`
	color: white;
	font-size: 3.5rem;
	font-family: "Rubik", sans-serif;
	font-weight: 500;
`;

const ScoreFigure = styled.figure`
	background: #ffbec6;
	min-height: 8rem;
	min-width: 7.5rem;
	border-radius: 1rem;
	display: grid;
	place-items: center;
	overflow: hidden;
`;

const ScoreValue = styled.h3`
	font-size: 4rem;
	font-family: "Open Sans", sans-serif;
	color: rgba(0, 0, 0, 0.8);
	/* transform: translateX(-300%); */
	&.score-value--exit {
		transform: translateX(0%);
	}
	&.score-value--exit-active {
		transform: translateX(300%);
		transition: 600ms cubic-bezier(0.16, 1, 0.3, 1) transform;
	}
	&.score-value--enter {
		transform: translateX(-300%);
	}
	&.score-value--enter-active {
		transform: translateX(0%);
		transition: 400ms cubic-bezier(0.34, 1.56, 0.64, 1) transform;
	}
`;

export default Score;
