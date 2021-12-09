import {FC, useContext} from "react"
import {Wrapper, Content} from "./Attribute.styles"
import {BASE_LOGO_ATTRIBUTE, ACTIVE_PNG} from "../../../config"
import {StateContext} from "../../../Home"

const attribute = ["str", "agi", "int"]

const Attribute:FC = () => {
	const {attr, dispatch} = useContext(StateContext)
	return (
		<Wrapper>
			<div>Attribute</div>
			{attribute.map((att:string, i:number) => 
				<Content
					key={i}
					image={`${BASE_LOGO_ATTRIBUTE}${att}${ACTIVE_PNG}`}
					onClick={() => dispatch({type: "set_attr", data: att})}
					className={att === attr ? "active" : undefined}
				/>
			)}
		</Wrapper>
	)
}

export default Attribute