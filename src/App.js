import React from "react";
import styled from "styled-components";
import Head from "./components/head";
import MainSection from "./components/MainSection";
import Score from "./components/score";

const App = () => {
	return (
		<MainContainer>
			<Head />
			<MainSection />
			<Score player="Player 1" />
			<Score player="Player 2" />
		</MainContainer>
	);
};

const MainContainer = styled.section`
	min-height: 99vh;
	width: 99%;
	display: grid;
	grid-template-columns: 20% auto 20%;
	grid-template-rows: 6rem auto;
	grid-template-areas:
		"X header Z"
		"sideL mainS sideR";
`;

export default App;
