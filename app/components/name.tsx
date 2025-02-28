'use client';
import React from 'react';
import '../styles/name.css';
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

export function Name() {
	function createSVGElement(
		path: React.JSX.Element,
		viewBox: number,
		reverse?: boolean
	) {
		return (
			<>
				<svg
					className={reverse ? 'outline' : 'letter'}
					viewBox={`0 0 ${viewBox} 1000`}
				>
					{path}
				</svg>
				<svg
					className={reverse ? 'letter' : 'outline'}
					viewBox={`0 0 ${viewBox} 1000`}
				>
					{path}
				</svg>
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
		<div className="nameWrapper">
			<div className="devName">
				<div className="letterWrapper">{cLetter}</div>
				<div className="letterWrapper">{eLetter}</div>
				<div className="letterWrapper">{eLetter}</div>
			</div>
			<div className="devSurname">
				<div className="letterWrapper">{oLetter}</div>
				<div className="letterWrapper">{cLetter}</div>
				<div className="letterWrapper">{hLetter}</div>
				<div className="letterWrapper">{oLetter}</div>
				<div className="letterWrapper">{aLetter}</div>
			</div>
			<div className="jobTitle">
				<div className="letterWrapper">{wLetter}</div>
				<div className="letterWrapper">{eLetter}</div>
				<div className="letterWrapper">{bLetter}</div>
				<div className="letterWrapper">{periodCentered}</div>
				<div className="letterWrapper">{dLetter}</div>
				<div className="letterWrapper">{eLetter}</div>
				<div className="letterWrapper">{vLetter}</div>
				<div className="letterWrapper">{eLetter}</div>
				<div className="letterWrapper">{lLetter}</div>
				<div className="letterWrapper">{oLetter}</div>
				<div className="letterWrapper">{pLetter}</div>
				<div className="letterWrapper">{eLetter}</div>
				<div className="letterWrapper">{rLetter}</div>
			</div>
		</div>
	);
}
