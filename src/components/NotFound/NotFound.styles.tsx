import styled from "styled-components"

export const Text = styled.div`
	width: 75vw;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	font-size: 75px;
    opacity: 1;
    animation: popUp ease-in-out 1s;

    @keyframes popUp {
    	from {opacity: 0; top: 100px}
    	to {opacity: 1; top: 0px}
    }
`