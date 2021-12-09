import styled from "styled-components"

interface Props {
	image: string
}

export const Content = styled.div.attrs<Props>(({image}) => ({
	style: {
		backgroundImage: `url(${image})`
	}
}))<Props>`
	width: 32px;
	height: 32px;
	background-size: cover;
	background-repeat: no-repeat;
	transition: all ease-in-out .1s;
	cursor: pointer;
	color: var(--white);
	filter: brightness(0.5) saturate(0);

	&.active {
		filter: brightness(1) saturate(1); 
	}
`