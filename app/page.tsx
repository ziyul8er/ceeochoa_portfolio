import React from 'react';
import { DeveloperName } from './components/devName';
import Links from './components/links';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';

const ibmFont: NextFont = localFont({
	src: 'fonts/IBMPlexMono-Regular.ttf'
});

export default function Home() {
	return (
		<>
			<div className="main-title">
				<DeveloperName />
				<div className={ibmFont.className + ' intro'}>
					Hey I’m Cee. I am a Web Developer, scientist at heart and
					passionate about gradening. Currently living and working in{' '}
					<span>Caracas</span> Naarm (Melborune).
				</div>
				{/* <Links /> */}
			</div>
		</>
	);
}
