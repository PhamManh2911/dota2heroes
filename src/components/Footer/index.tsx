import {Wrapper, Content, Dota, Valve, Text} from "./Footer.styles"
import ValveLogo from "../../images/valve.png"
import DotaLogo from "../../images/DotA2.png"

export default function Footer() {
	return (
		<Wrapper>
			<Content>
				<Valve src={ValveLogo} alt="valve" />
				<Dota src={DotaLogo} alt="dota2" />
			</Content>
			<Text>&copy; Copyright Dota 2 Heroes 2021 by PHDM<br />This is not a commercial product!!!</Text>	
		</Wrapper>
	)
}