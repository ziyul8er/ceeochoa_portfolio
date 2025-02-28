import React from 'react';

type svgPath = React.JSX.Element;
interface svgPathsObject {
	[x: string]: svgPath;
}

const svgLetterPaths: svgPathsObject = {
	a: (
		<path
			href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers."
			strokeWidth="1"
			d="M113 700q14 0 23.5 -10t9.5 -24v-283v-67v-316h-67v316h-12v-316h-67v316v67v283q0 14 9.5 24t23.5 10h80zM79 383v250h-12v-250h12z"
		/>
	),
	c: (
		<path
			href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers."
			strokeWidth="1"
			d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v633q0 14 9.5 24t23.5 10h80q14 0 23.5 -10t9.5 -24v-310h-67v277h-12v-566h12v277h67v-311q0 -14 -9.5 -23.5t-23.5 -9.5h-80v0z"
		/>
	),
	e: (
		<path
			href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers."
			strokeWidth="1"
			d="M146 0h-146v700h146v-304h-67v237h-12v-249h79v-67h-79v-250h12v237h67v-304v0z"
		/>
	),
	h: (
		<path
			href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers."
			strokeWidth="1"
			d="M67 316v-316h-67v316v67v317h67v-317h12v317h67v-317v-67v-316h-67v316h-12v0z"
		/>
	),
	o: (
		<path
			href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers."
			strokeWidth="1"
			d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v634q0 14 9.5 23.5t23.5 9.5h80q14 0 23.5 -9.5t9.5 -23.5v-634q0 -14 -9.5 -23.5t-23.5 -9.5h-80zM67 67h12v566h-12v-566z"
		/>
	)
};

function getSvgElementsArray(letters: svgPath[]): svgPath[] {
	const finalArray: svgPath[] = [];
	const length: number = letters.length;
	let type: string;

	switch (length) {
		case 3:
			type = 'name';
			break;
		case 5:
			type = 'surname';
			break;
		default:
			type = 'id';
	}

	letters.map((letterPath, index) =>
		finalArray.push(
			<svg
				key={index}
				id={type + index.toString()}
				viewBox="0 0 146 700"
				className="letterSvgElement"
			>
				{letterPath}
			</svg>
		)
	);
	return finalArray;
}

export const nameSvgArray: svgPath[] = getSvgElementsArray([
	svgLetterPaths.c,
	svgLetterPaths.e,
	svgLetterPaths.e
]);

export const surnameSvgArray: svgPath[] = getSvgElementsArray([
	svgLetterPaths.o,
	svgLetterPaths.c,
	svgLetterPaths.h,
	svgLetterPaths.o,
	svgLetterPaths.a
]);

export const mailIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-mail"
	>
		<rect width="20" height="16" x="2" y="4" rx="2" />
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
	</svg>
);

export const linkedInIcon = (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		className="injected-svg"
		role="img"
		color="#ffffff"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM6.25 9L6.25 17H7.75L7.75 9H6.25ZM10.25 9H11.75V9.99973C12.3767 9.52896 13.1558 9.25 14 9.25C16.0711 9.25 17.75 10.9289 17.75 13V17H16.25V13C16.25 11.7574 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.7574 11.75 13L11.75 17H10.25L10.25 9ZM7.00781 8C7.5601 8 8.00781 7.55229 8.00781 7C8.00781 6.44771 7.5601 6 7.00781 6H6.99883C6.44655 6 5.99883 6.44771 5.99883 7C5.99883 7.55228 6.44655 8 6.99883 8H7.00781Z"
			fill="#ffffff"
		></path>
	</svg>
);

export const aChunkLetter = (
	<path d="M808 750h-401v-131h95l-21 -68h-205l-21 68h78v131h-318v-131h68l135 -439h-41v-129h384l177 568h70v131zM313 431h131l-66 -216z" />
);

export const cChunkLetter = (
	<path
		d="M671 625q-57 62 -134 101.5t-169 39.5q-106 0 -185.5 -43.5t-123.5 -124.5t-44 -191q0 -109 47 -193t118 -129.5t139 -45.5q64 0 100.5 23t53.5 45l23 -56h157v284h-179q-2 -53 -29 -89.5t-77 -36.5q-35 0 -62 26.5t-42 71.5t-15 100q0 79 39 133.5t107 54.5
q38 0 71.5 -20t45.5 -32t42 -46z"
	/>
);

export const eChunkLetter = (
	<path d="M25 51h603v221h-173v-89h-160v138h190v133h-190v163h160v-93h173v226h-603v-133h63v-434h-63v-132z" />
);

export const hChunkLetter = (
	<path d="M25 51h324v132h-62v151h190v-151h-59v-132h325v132h-58v435h58v132h-325v-132h59v-151h-190v151h62v132h-324v-132h55v-435h-55v-132z" />
);

export const lChunkLetter = (
	<path d="M25 51h316v132h-53v434h129v-127h168v260h-560v-133h55v-434h-55v-132z" />
);

export const pChunkLetter = (
	<path d="M25 51h324q110 0 171 28.5t83 75t22 110.5t-35 108.5t-95 67t-133 22.5h-76v155h61v132h-322v-132h56v-436h-56v-131zM286 181v174h45q44 0 71 -22t27 -61q0 -44 -24.5 -67.5t-68.5 -23.5h-50z" />
);

export const rChunkLetter = (
	<path
		d="M25 51h325q110 0 171 26.5t83.5 71t22.5 108.5q0 57 -40.5 96.5t-104.5 48.5q53 8 92 48.5t39 93.5q0 34 5.5 51t18.5 17q11 0 17 -8.5t6 -23.5v-33h67v55q0 70 -34.5 115t-111.5 45q-97 0 -145.5 -48.5t-48.5 -137.5q0 -49 -6.5 -71.5t-27.5 -32t-66 -9.5v155h61v132
	h-323v-132h56v-436h-56v-131zM287 181v170h45q44 0 70 -21t26 -60q0 -44 -23.5 -66.5t-67.5 -22.5h-50z"
	/>
);

export const vChunkLetter = (
	<path d="M425 526q3 -45 36 -127l91 -218h-52l-1 -130h284v130h-49l-240 569h-184l-265 -569h-55v-130h369l-1 130h-54l85 224q29 88 31 121h5z" />
);

export const dChunkLetter = (
	<path d="M25 750v-133h62v-434h-62v-132h305q118 0 204 44.5t131 122t45 173.5q0 171 -100 265t-284 94h-301zM442.5 243q-37.5 -60 -112.5 -60h-38v434h38q76 -1 113 -63.5t37 -162.5q0 -88 -37.5 -148z" />
);

export const bChunkLetter = (
	<path
		d="M25 750v-130h58v-440h-58v-129h373q123 0 184 44t61 127q0 64 -21.5 98.5t-76.5 56.5q59 16 95.5 58.5t36.5 111.5q0 106 -64 154.5t-208 48.5h-380zM290 183v150h61q38 0 53 -19.5t15 -57.5q0 -34 -18.5 -53.5t-47.5 -19.5h-63zM370 620q33 0 57 -23.5t24 -62.5
	t-22 -63.5t-62 -24.5h-77v174h80z"
	/>
);

export const wChunkLetter = (
	<path
		d="M325 524q2 -20 41 -210l8 -38l50 -225h208l63 276q19 89 30 197h5q3 -32 13 -95t17 -96l34 -152h-55v-130h286v130h-55l-149 569h-237l-60 -238q-13 -48 -25 -124h-4q-3 21 -10.5 58t-13.5 64l-61 240h-232l-132 -569h-56v-130h330v130h-58l26 146q7 31 17 95.5t15 101.5
	h5z"
	/>
);

export const oChunkLetter = (
	<path
		d="M186 726.5q-81 -41.5 -126 -124.5t-45 -205q0 -107 44.5 -190t124.5 -129t182 -46q179 0 269 99t90 273q0 171 -92 267.5t-260 96.5q-106 0 -187 -41.5zM447.5 554.5q27.5 -56.5 27.5 -150.5q0 -98 -27.5 -158t-83.5 -60q-30 0 -53 27t-36 75t-13 109q0 64 14.5 112.5
t39.5 75t57 26.5q47 0 74.5 -56.5z"
	/>
);

export const periodCenteredChunkLetter = (
	<path d="M28.5 364.5q13.5 -26.5 39 -43.5t60.5 -17t61 17.5t40 43.5t14 53q0 47 -30.5 77.5t-84.5 30.5q-32 0 -58 -15.5t-40.5 -40.5t-14.5 -52t13.5 -53.5z" />
);
