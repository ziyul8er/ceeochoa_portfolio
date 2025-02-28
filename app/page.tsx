import React from 'react';
import { DeveloperName } from './components/devName';
import Links from './components/links';

export default function Home() {
	return (
		<>
			<div className="main-title">
				<DeveloperName />
				<Links />
			</div>
		</>
	);
}
