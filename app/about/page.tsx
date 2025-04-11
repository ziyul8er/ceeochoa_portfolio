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
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';

const ibmFont: NextFont = localFont({
	src: '../fonts/IBMPlexMono-Regular.ttf'
});

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
				<div className="window__nav">
					<div className="main-heading">
						<div className="main-heading__about">
							{aLetter}
							{bLetter}
							{oLetter}
							{uLetter}
							{tLetter}
						</div>
					</div>
					<Link href={'/'} className="nav">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="nav__back-arrow lucide lucide-arrow-left-icon lucide-arrow-left"
						>
							<path d="m12 19-7-7 7-7" />
							<path d="M19 12H5" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="nav__back-arrow--shadow lucide lucide-arrow-left-icon lucide-arrow-left"
						>
							<path d="m12 19-7-7 7-7" />
							<path d="M19 12H5" />
						</svg>
					</Link>
				</div>

				<div className={ibmFont.className + ' about-text'}>
					Cee is a web developer, engineer, mad scientist and music
					enjoyer/explorer.
				</div>

				<div className="wall">
					<div className={ibmFont.className + ' wall__top-div'}>
						{"<div class='wall__404-error'>"}
					</div>
					<Image
						className="wall__dev-pic"
						src="/media/dev_pic.png"
						width={84}
						height={200}
						alt={"Developer's photo leaning on a wall"}
					></Image>
					<div className={ibmFont.className + ' wall__bot-div'}>
						{'</div>'}
					</div>
				</div>

				<div className="about-text__bottom-section">
					<div className={ibmFont.className + ' about-text'}>
						Born and raised in the Caribbean.
					</div>
					<div className={ibmFont.className + ' about-text'}>
						Based: <s>Caracas</s> <s>Oxford</s> Melbourne.
					</div>
					<div className={ibmFont.className + ' about-text'}>
						Let&#39;s chat!
					</div>
					<Link
						href="mailto:xceeochoax@gmail.com"
						className={
							ibmFont.className + ' about-text about-text__email'
						}
					>
						<span className="about-text__email__icon">&#9993;</span>{' '}
						xceeochoax@gmail.com
					</Link>
				</div>
			</div>
		</>
	);
}
