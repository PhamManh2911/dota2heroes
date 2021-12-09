import {Wrapper, Fade} from "./HeroImage.styles"
import {HERO_IMAGE, HERO_IMAGE_SMALL} from "../../config"

const HeroImage = () => {
	return (
		<Wrapper image={HERO_IMAGE} smallImage={HERO_IMAGE_SMALL}>
			<Fade dir="" ></Fade>
			<Fade dir="to top,"></Fade>
		</Wrapper>
	)
}

export default HeroImage