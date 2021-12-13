import styled from "styled-components"

interface Props {
	heightWidth: number
}

export const Wrapper = styled.div`
	margin: -700px auto 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`

export const Text = styled.div`
	font-weight: 700;
	font-size: 5vw;
	color: #e2dace;
	text-transform: uppercase;
	letter-spacing: 2px;
	line-height: 155%;
	text-align: center;

	span:last-child {
		font-size: 10vw;
	}
`

export const Content = styled.div.attrs<Props>(({heightWidth}) => ({
	style: {
		height: `${heightWidth*136}px`,
	}
}))<Props>`
	min-height: 400px;
	width: 960px;
	position: relative;
	margin-top: 1rem;
	margin-bottom: 1rem;
	color: var(--white);
	transition: all ease-in-out 1.5s;
	opacity: 0;
	transform: translateY(200px);

	&.appear {
		opacity: 1;
		transform: translateY(0);
	}
`