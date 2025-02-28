'use client';
import React from 'react';
import '../styles/devName.css';
import {
	cChunkLetter,
	eChunkLetter,
	aChunkLetter,
	oChunkLetter,
	hChunkLetter,
	rChunkLetter,
	wChunkLetter,
	vChunkLetter,
	pChunkLetter,
	bChunkLetter,
	dChunkLetter,
	lChunkLetter,
	periodCenteredChunkLetter
} from '../variables/svgPaths';

export function DeveloperName() {
	function createSVGElement(path: React.JSX.Element, viewBox: number) {
		return (
			<>
				<div className="character">
					<svg
						className="character--solid"
						viewBox={`0 0 ${viewBox} 1000`}
					>
						{path}
					</svg>
					<svg
						className="character--outline"
						viewBox={`0 0 ${viewBox} 1000`}
					>
						{path}
					</svg>
				</div>
			</>
		);
	}

	const cLetter = createSVGElement(cChunkLetter, 696);
	const eLetter = createSVGElement(eChunkLetter, 663);
	const hLetter = createSVGElement(hChunkLetter, 778);
	const aLetter = createSVGElement(aChunkLetter, 833);
	const oLetter = createSVGElement(oChunkLetter, 750);
	const rLetter = createSVGElement(rChunkLetter, 747);
	const wLetter = createSVGElement(wChunkLetter, 1055);
	const vLetter = createSVGElement(vChunkLetter, 813);
	const pLetter = createSVGElement(pChunkLetter, 650);
	const bLetter = createSVGElement(bChunkLetter, 697);
	const dLetter = createSVGElement(dChunkLetter, 730);
	const lLetter = createSVGElement(lChunkLetter, 620);
	const periodCentered = createSVGElement(periodCenteredChunkLetter, 268);

	return (
		<div className="name-title">
			<div className="name-title__dev-name">
				{cLetter}
				{eLetter}
				{eLetter}
			</div>
			<div className="name-title__dev-surname">
				{oLetter}
				{cLetter}
				{hLetter}
				{oLetter}
				{aLetter}
			</div>
			<div className="name-title__job-title">
				{wLetter}
				{eLetter}
				{bLetter}
				{periodCentered}
				{dLetter}
				{eLetter}
				{vLetter}
				{eLetter}
				{lLetter}
				{oLetter}
				{pLetter}
				{eLetter}
				{rLetter}
			</div>
		</div>
	);
}
