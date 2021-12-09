import {FC, useContext} from "react"
import {Wrapper} from "../Attribute/Attribute.styles"
import {Content} from "./Type.styles"
import {BASE_TYPE, SVG} from "../../../config"
import {StateContext} from "../../../Home"

const types = ["ranged", "melee"]

const Type:FC = () => {
	const {type, dispatch} = useContext(StateContext)
	return (
		<Wrapper>
			<div>Type</div>
			{
				types.map((typeItem:string, i:number) => 
					<Content 
						key={i}
						image={`${BASE_TYPE}${typeItem}${SVG}`}
						onClick={e => dispatch({type:"set_type", data: typeItem})}
						className={typeItem === type ? "active" : undefined}
					/>)
			}
		</Wrapper>
	)
}

export default Type