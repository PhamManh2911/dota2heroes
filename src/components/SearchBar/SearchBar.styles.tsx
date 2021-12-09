import styled from "styled-components"

export const Wrapper = styled.div`
	width: 900px;
	margin: 1rem;
	padding: 1rem;
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.75rem;
	border: 1px solid #11111190;
	box-shadow: 0px 0px 30px #00000050;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
	color: #808fa6;
	font-size: var(--fontSmall);
	text-transform: uppercase;
	letter-spacing: 2px;

	&>div:first-child {
		display: none;
		font-size: var(--fontBig);
	}

	@media (max-width: 960px) {
		width: 90%;
		flex-direction: column;

		&>div:first-child {
			display: block;
		}
	}
`