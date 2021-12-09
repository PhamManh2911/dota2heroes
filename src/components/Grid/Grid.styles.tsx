import styled from "styled-components"
interface Props {
	image: string,
	top: number,
	left: number,
	margin: number
}

export const Wrapper = styled.div.attrs<Props>(({image, top, left, margin}) => ({
	style: {
		backgroundImage: `url(${image})`,
		left: `calc(122px * ${margin} + 243px * ${left})`,
		top: `calc(136px * ${top})`,	
	}
}))<Props>`
	position: absolute;
	width: 232px;
	height: 127px;
	overflow: hidden;
	transition: all 0.3s ease-out;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 110%;
	transform: scale(1);
	cursor: pointer;

	&.dissappear {
		transform: scale(0);
	}

	&:hover {
		transform: scale(1.25,1.25);
		box-shadow: 8px 8px 20px black;
		z-index: 1;
	}

	&:hover>div {
		transform: translateY(-20%);
		opacity: 1;
	}
`

export const Background = styled.div`
	position: absolute;
	top: 20%;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);
	opacity: 0;
	transition: all 0.3s ease-out;
`
 export const Content = styled.div`
	position: absolute;
	top: 60%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;

	img {
		width: 2rem;
	}

	span {
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 700;
	}
 `