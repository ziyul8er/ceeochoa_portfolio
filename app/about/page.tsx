'use client';
import React from 'react';
import '../styles/about.css';
import createSVGElement, {
	aChunkLetter,
	bChunkLetter,
	oChunkLetter,
	uChunkLetter,
	tChunkLetter
} from '../variables/svgPaths';

export default function About() {
	const aLetter = createSVGElement(aChunkLetter, 833);
	const bLetter = createSVGElement(bChunkLetter, 697);
	const oLetter = createSVGElement(oChunkLetter, 750);
	const uLetter = createSVGElement(uChunkLetter, 747);
	const tLetter = createSVGElement(tChunkLetter, 711);

	return (
		<>
			{/* deberia poner una flecha para ir para atras */}
			<div className="window">
				<div className="main-heading">
					<div className="main-heading__about">
						{aLetter}
						{bLetter}
						{oLetter}
						{uLetter}
						{tLetter}
					</div>
					<p>
						Cee is a web developer, engineer, mad scientist and
						music enjoyer/explorer
					</p>
					<p>Born and raised in the Caribbean</p>
					<p>
						Based: <s>Caracas</s> <s>Oxford</s> Naarm/Melbourne
					</p>
				</div>
			</div>
		</>
	);
}
