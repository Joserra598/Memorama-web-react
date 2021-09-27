import styled from "styled-components";
import { ReactComponent as PlayLogo } from "../images/PlayLogo.svg";
import { useDispatch } from "react-redux";
import { gameActions } from "../actions";

const Inicio = () => {
	const dispatch = useDispatch();

	return (
		<InitialFigure>
			{/* <PlayLogo onClick={() => chageState(false)} /> */}
			<PlayLogo onClick={() => dispatch(gameActions.hideMenu())} />
			<h3>Jugar</h3>
		</InitialFigure>
	);
};

const InitialFigure = styled.figure`
	background-color: #ffbec6;
	width: 50vh;
	height: 50vh;
	border-radius: 2em;
	display: grid;
	place-items: center;
	box-shadow: 0 5px 1.2em 0 rgba(0, 0, 0, 0.5);

	position: relative;

	& > svg {
		width: 40%;
		height: 40%;
		fill: #d9a2a9;
		opacity: 0.6;
		transition: 800ms ease all;

		&:hover {
			fill: #fb5179;
			cursor: pointer;
			transform: scale(0.95) translateY(-20%);
			filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
		}

		&:hover + h3 {
			opacity: 1;
			transform: translate(-50%, 100%);
			transition-duration: 500ms;
		}
	}

	&.init-page--exit {
		transform: rotateX(0deg) rotateY(0deg);
	}

	&.init-page--exit-active {
		transition: transform 800ms cubic-bezier(0, 0.55, 0.45, 1);
		transform: rotateX(45deg) rotateY(90deg);
	}

	& > h3 {
		position: absolute;
		font-family: "Open Sans", sans-serif;
		opacity: 0;
		pointer-events: none;
		font-size: 2rem;
		color: hsl(352, 60%, 74%);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 400ms ease, opacity 150ms linear;
	}
`;

export default Inicio;
