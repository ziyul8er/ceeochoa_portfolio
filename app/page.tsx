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
