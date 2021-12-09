import styled from "styled-components"

interface Props {
	image: string
}

export const Wrapper = styled.div`
	width: 250px;
	display: flex;
	justify-content: center;
`

export const Content = styled.div`
	height: 50px;
	background-color: #25282a;
	display: flex;
	align-items: center;
`

export const SearchIcon = styled.div.attrs<Props>(({image}) => ({
	style: {
		backgroundImage: `url(${image})`
	}
}))<Props>`
	min-height: 26px;
	min-width: 26px;
	margin: auto 10px;
	background-size: cover;
	background-repeat: no-repeat;
`

export const Input = styled.input.attrs({
	type: "text"
})`
	height: 30px;
	width: 100%;
	border: 0px solid transparent;
	background-color: #25282a;
	outline: none;
	color: var(--white);
	font-size: var(--fontMed);
	padding: 4px;
`