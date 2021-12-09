import styled from "styled-components"

interface Props {
	image: string,
	smallImage: string
}

export const Wrapper = styled.div<Props>`
	background: url(${({image}) => image}) top no-repeat; 
	position: relative;
	width: 100%;
	height: 1500px;
	z-index: -1; 

	@media (max-width: 900px) {
		background: url(${({smallImage}) => smallImage}) top no-repeat;
		background-size: 1000px; 
		height: 1200px;
	}
`

export const Fade = styled.div.attrs<{dir: string}>(({dir}) => ({
	style: {
		backgroundImage: `linear-gradient(${dir} rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)`
	}
}))<{dir: string}>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;	
`