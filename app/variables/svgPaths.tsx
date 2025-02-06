import React from "react";

type svgPath = React.JSX.Element
interface svgPathsObject {
    [x: string]: svgPath;
}

const svgLetterPaths: svgPathsObject = {
    a: <path fill="white" stroke="black" strokeWidth="1" d="M113 700q14 0 23.5 -10t9.5 -24v-283v-67v-316h-67v316h-12v-316h-67v316v67v283q0 14 9.5 24t23.5 10h80zM79 383v250h-12v-250h12z" />,
    c: <path fill="white" stroke="black" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v633q0 14 9.5 24t23.5 10h80q14 0 23.5 -10t9.5 -24v-310h-67v277h-12v-566h12v277h67v-311q0 -14 -9.5 -23.5t-23.5 -9.5h-80v0z" />,
    e: <path fill="white" stroke="black" strokeWidth="1" d="M146 0h-146v700h146v-304h-67v237h-12v-249h79v-67h-79v-250h12v237h67v-304v0z" />,
    h: <path fill="white" stroke="black" strokeWidth="1" d="M67 316v-316h-67v316v67v317h67v-317h12v317h67v-317v-67v-316h-67v316h-12v0z" />,
    o: <path fill="white" stroke="black" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v634q0 14 9.5 23.5t23.5 9.5h80q14 0 23.5 -9.5t9.5 -23.5v-634q0 -14 -9.5 -23.5t-23.5 -9.5h-80zM67 67h12v566h-12v-566z" />
};

function getSvgElementsArray(letters: svgPath[]): svgPath[] {
    const finalArray: svgPath[] = [];
    letters.map((letterPath, index) => (

        finalArray.push(
            <svg key={index}
                id={index.toString()}
                viewBox="0 0 146 700" 
                className="svg"
            >
                {letterPath}
            </svg>
        )
    ));
    return finalArray;
}

export const nameSvgArray: svgPath[] = getSvgElementsArray([svgLetterPaths.c, svgLetterPaths.e, svgLetterPaths.e]);

export const surnameSvgArray: svgPath[] = getSvgElementsArray([svgLetterPaths.o, svgLetterPaths.c, svgLetterPaths.h, svgLetterPaths.o, svgLetterPaths.a]);
