import React from 'react';

export default function createSVGElement(
	path: React.JSX.Element,
	viewBox: number
) {
	return (
		<div className="character">
			<svg className="character--solid" viewBox={`0 0 ${viewBox} 1000`}>
				{path}
			</svg>
			<svg className="character--outline" viewBox={`0 0 ${viewBox} 1000`}>
				{path}
			</svg>
		</div>
	);
}

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

export const uChunkLetter = (
	<path d="M15 51h318v129h-54v215q0 79 11.5 122t33 58.5t55.5 15.5t55.5 -15.5t33.5 -58.5t12 -122v-212h-54v-132h296v129h-54v245q0 177 -70 259.5t-219 82.5q-308 0 -308 -342v-244h-56v-130z" />
);

export const tChunkLetter = (
	<path d="M686 51v260h-147v-128h-84v434h83v133h-372v-133h82v-434h-86v128h-147v-260h671z" />
);

export const periodCenteredChunkLetter = (
	<path d="M28.5 364.5q13.5 -26.5 39 -43.5t60.5 -17t61 17.5t40 43.5t14 53q0 47 -30.5 77.5t-84.5 30.5q-32 0 -58 -15.5t-40.5 -40.5t-14.5 -52t13.5 -53.5z" />
);
