import styled from "styled-components"

interface Props {
	image: string
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	&>div:first-child {
		margin-right: 1rem;
	}
`

export const Content = styled.div.attrs<Props>(({image}) => ({
	style: {
		backgroundImage: `url(${image})`
	}
}))<Props>`
	width: 40px;
	height: 33px;
	margin-left: -4px;
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