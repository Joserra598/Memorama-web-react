import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import PanelCard from "./PanelCard";

const Tablero = () => {
	const [images, getImages] = useState([]);
	const Tablero = useRef();
	useEffect(() => {
		function importAll(r) {
			return r
				.keys()
				.slice(1)
				.reduce((acc, item, i) => {
					acc.push({
						name: item.replace("./", ""),
						route: r(item).default,
						id: i + 1,
					});
					return acc;
				}, []);
		}
		const images = importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

		const seekImages = [...images, ...images];
		const copyArray = [...seekImages];
		const imagesRevueltas = seekImages.reduce(
			(acc) => {
				const getRandomValue = Math.round(Math.random() * (acc[1].length - 1));
				const result = acc[1].splice(getRandomValue, 1);
				acc[0].push(result[0]);
				return acc;
			},
			[[], copyArray]
		);
		getImages(imagesRevueltas[0]);
	}, []);

	return (
		<TableroFiguere ref={Tablero}>
			{images.map((image, i) => (
				<PanelCard key={i} image={image} Tablero={Tablero} />
			))}
		</TableroFiguere>
	);
};

const TableroFiguere = styled.figure`
	display: grid;
	min-width: 40em;
	min-height: 40em;
	gap: 0.8em;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	/* transform: rotateX(0deg) rotateY(-50deg); */
	&.show-panel--enter {
		transform: rotateX(20deg) rotateY(-90deg) scale(0.5);
	}

	&.show-panel--enter-active {
		transition: transform 1500ms cubic-bezier(0.34, 1.56, 0.64, 1);
		transform: rotateX(0deg) rotateY(0deg) scale(1);
	}
`;

export default Tablero;
