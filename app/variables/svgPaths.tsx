import React from "react";

type svgPath = React.JSX.Element
interface svgPathsObject {
    [x: string]: svgPath;
}

const svgLetterPaths: svgPathsObject = {
    a: <path href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers." fill="white" stroke="black" strokeWidth="1" d="M113 700q14 0 23.5 -10t9.5 -24v-283v-67v-316h-67v316h-12v-316h-67v316v67v283q0 14 9.5 24t23.5 10h80zM79 383v250h-12v-250h12z" />,
    c: <path href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers." fill="white" stroke="black" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v633q0 14 9.5 24t23.5 10h80q14 0 23.5 -10t9.5 -24v-310h-67v277h-12v-566h12v277h67v-311q0 -14 -9.5 -23.5t-23.5 -9.5h-80v0z" />,
    e: <path href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers." fill="white" stroke="black" strokeWidth="1" d="M146 0h-146v700h146v-304h-67v237h-12v-249h79v-67h-79v-250h12v237h67v-304v0z" />,
    h: <path href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers." fill="white" stroke="black" strokeWidth="1" d="M67 316v-316h-67v316v67v317h67v-317h12v317h67v-317v-67v-316h-67v316h-12v0z" />,
    o: <path href="https://velvetyne.fr/fonts/outward/#:~:text=Outward%20is%20a%20display%20font,grey%20sought%20after%20by%20typographers." fill="white" stroke="black" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v634q0 14 9.5 23.5t23.5 9.5h80q14 0 23.5 -9.5t9.5 -23.5v-634q0 -14 -9.5 -23.5t-23.5 -9.5h-80zM67 67h12v566h-12v-566z" />
};

function getSvgElementsArray(letters: svgPath[]): svgPath[] {
    const finalArray: svgPath[] = [];
    const length: number = letters.length;
    let type: string;
    
    switch (length) {
        case 3:
            type = "name";
            break;
        case 5:
            type = "surname";
            break;
        default:
            type = 'id';
    };

    letters.map((letterPath, index) => (

        finalArray.push(
            <svg key={index}
                id={type + index.toString()}
                viewBox="0 0 146 700" 
                className="letterSvgElement"
            >
                {letterPath}
            </svg>
        )
    ));
    return finalArray;
}

export const nameSvgArray: svgPath[] = getSvgElementsArray([svgLetterPaths.c, svgLetterPaths.e, svgLetterPaths.e]);

export const surnameSvgArray: svgPath[] = getSvgElementsArray([svgLetterPaths.o, svgLetterPaths.c, svgLetterPaths.h, svgLetterPaths.o, svgLetterPaths.a]);

export const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

export const linkedInIcon = <svg viewBox="0 0 24 24" fill="none" className="injected-svg" role="img" color="#ffffff">
<path fillRule="evenodd" clipRule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM6.25 9L6.25 17H7.75L7.75 9H6.25ZM10.25 9H11.75V9.99973C12.3767 9.52896 13.1558 9.25 14 9.25C16.0711 9.25 17.75 10.9289 17.75 13V17H16.25V13C16.25 11.7574 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.7574 11.75 13L11.75 17H10.25L10.25 9ZM7.00781 8C7.5601 8 8.00781 7.55229 8.00781 7C8.00781 6.44771 7.5601 6 7.00781 6H6.99883C6.44655 6 5.99883 6.44771 5.99883 7C5.99883 7.55228 6.44655 8 6.99883 8H7.00781Z" fill="#ffffff"></path>
</svg>