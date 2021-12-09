import {FC, useContext} from "react"
import {Wrapper, Content, SearchIcon, Input} from "./Search.styles"
import {SEARCH_ICON} from "../../../config"
import {StateContext} from "../../../Home"

const Search:FC = () => {
	const {searchTerm, dispatch} = useContext(StateContext)
 	return (
 		<Wrapper>
 			<Content>
 				<SearchIcon image={SEARCH_ICON}></SearchIcon>
 				<Input value={searchTerm} onChange={e => dispatch({type: "set_search_term", data: e.target.value})} />
 			</Content>
 		</Wrapper>
 	)
}

export default Search 