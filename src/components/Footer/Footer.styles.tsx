import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
`

export const Content = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem auto 3rem;
	gap: 12vw;
`

export const Dota = styled.img`
	width: 10rem;

	@media (max-width: 500px) {
		width: 8rem;
	}
`

export const Valve = styled.img`
	width: 7.5rem;

	@media (max-width: 500px) {
		width: 6rem;
	}
`

export const Text = styled.div`
	color: #333;
	text-align: center;
`