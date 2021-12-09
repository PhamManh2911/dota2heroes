import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		user-select: none;
		font-family: "Noto Sans",sans-serif;
	}

	:root {
		--maxWidth: 90%;
		--black: rgba(0, 0, 0, 1);		
		--darkGrey: rgba(0, 0, 0, 0.7);
		--medGrey: rgba(0, 0, 0, 0.5);
		--lightGrey: rgba(0, 0, 0, 0.3);
		--white: #fff;
		--fontSuperBig: 2.5rem;
		--fontBig: 1.5rem;
		--fontMed: 1.2rem;
		--fontSmall: 1rem;
	}

	body {
		background-color: black;
	}
`