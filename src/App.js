import React, { useState } from "react";
import Tablero from "./components/Tablero";
import Inicio from "./components/Inicio";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

// const App = () => {
// 	const [initScreen, chageState] = useState(true);
// 	const [panelScreen, changeStatePanel] = useState(false);

// 	return (
// 		<>
// 			<CSSTransition
// 				in={initScreen}
// 				timeout={800}
// 				classNames={"init-page-"}
// 				unmountOnExit={true}
// 				onExited={() => changeStatePanel(true)}
// 			>
// 				<Inicio chageState={chageState} />
// 			</CSSTransition>

// 			<CSSTransition
// 				in={panelScreen}
// 				timeout={1500}
// 				classNames={"show-panel-"}
// 				mountOnEnter={true}
// 				unmountOnExit={true}
// 			>
// 				<Tablero />
// 			</CSSTransition>
// 		</>
// 	);
// };

const App = () => {
	return <h2>Aquí va todo el contendido</h2>;
};

export default App;
