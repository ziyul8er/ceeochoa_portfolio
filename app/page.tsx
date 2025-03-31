import React from 'react';
import DeveloperName from './components/devName';
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
					passionate about gardening. Currently living and working in{' '}
					<s>Caracas</s> <s>Oxford</s> Naarm (Melborune).
				</div>

				<div className={ibmFont.className + ' home-links'}>
					<a>>_About</a>
					<a>>_Email</a>
					<a>>_GitHub</a>
					<a>>_LinkedIn</a>
				</div>
			</div>
		</>
	);
}
