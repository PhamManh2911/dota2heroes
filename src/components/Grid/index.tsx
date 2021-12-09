import {FC} from "react"
import {Wrapper, Background, Content} from "./Grid.styles"
import Strength from "../../images/strength.png"
import Intelligence from "../../images/intelligence.png"
import Agility from "../../images/agility.png"

interface Props {
	image: string,
	index: number,
	name: string,
	attribute: string,
	row: number;
	dissappear: string | undefined
}

const Grid:FC<Props> = ({image, index, name, attribute, dissappear, row}) => {
	return (
		<Wrapper 
			image={image} 
			top={Math.floor(index/row)} 
			left={index%row} 
			className={dissappear}
			margin={4-row}
			>
			<Background>
				<Content>
					<img src={
						attribute === "str" ? Strength
						: (attribute === "agi" ? Agility : Intelligence)
					} alt={attribute} />
					<span>{name}</span>
				</Content>
			</Background>
		</Wrapper>
	)
}

export default Grid