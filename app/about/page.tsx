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
					<div className="wall">
						<p className="wall__top-div">
							{"<div className='404_wall'>"}
						</p>
						<Image
							className="wall__dev-pic"
							src="/media/dev_pic.png"
							width={84}
							height={200}
							alt={"Developer's photo leaning on a wall"}
						></Image>
						<p className="wall__bot-div">{'</div>'}</p>
					</div>

					<p>Born and raised in the Caribbean</p>
					<p>
						Based: <s>Caracas</s> <s>Oxford</s> Naarm/Melbourne
					</p>
					<p>Let&#39;s chat!</p>
					<Link href="mailto:xceeochoax@gmail.com">
						xceeochoax@gmail.com
					</Link>
				</div>
			</div>
		</>
	);
}
