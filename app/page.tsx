import React from 'react';
import DeveloperName from './components/devName';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';
import Link from 'next/link';
import './styles/home.css';

const ibmFont: NextFont = localFont({
	src: 'fonts/IBMPlexMono-Regular.ttf'
});

export default function Home() {
	return (
		<>
			<div className="window">
				<DeveloperName />
				<div className={ibmFont.className + ' intro'}>
					Hey I’m Cee. I am a Web Developer, scientist at heart and
					passionate about gardening. Currently living and working in{' '}
					<s>Caracas</s> <s>Oxford</s> Naarm (Melborune).
				</div>

				<div className={ibmFont.className + ' home-links'}>
					<Link href="/about">>_About</Link>
					<Link href="mailto:xceeochoax@gmail.com">>_Email</Link>
					<Link href="https://github.com/ziyul8er">>_GitHub</Link>
					<Link href="http://www.linkedin.com/in/ceeochoa">>_LinkedIn</Link>
				</div>
			</div>
		</>
	);
}
