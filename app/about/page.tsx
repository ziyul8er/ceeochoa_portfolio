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
	const bLetter = createSVGElement(bChunkLetter, 833);
	const oLetter = createSVGElement(oChunkLetter, 833);
	const uLetter = createSVGElement(uChunkLetter, 833);
	const tLetter = createSVGElement(tChunkLetter, 833);

	return (
		// deberia poner una flecha para ir para atras
		<div className="window">
			<div className="main-heading">
				<div className="main-heading__about">
					{aLetter}
					{bLetter}
					{oLetter}
					{uLetter}
					{tLetter}
				</div>
			</div>
		</div>
	);
}
