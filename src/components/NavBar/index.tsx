import {Wrapper, Content, Image} from "./NavBar.styles"
import LogoDota2 from "../../images/logoDota2.png"

const NavBar = () => {
	return (
		<Wrapper>
			<Content>
				<Image src={LogoDota2} />
				<h1>DOTA 2 HEROES</h1>
			</Content>
		</Wrapper>
	)
}

export default NavBar