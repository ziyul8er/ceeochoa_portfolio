import React from 'react';
import { Name } from './components/name';
import Links from './components/links';
import NameTitle from './components/nameTitle';
// import NameTitle from "./components/nameTitle";
// import Links from './components/links';

export default function Home() {
	return (
		<>
			<Name />
			<NameTitle />
			<Links />
		</>
	);
}
