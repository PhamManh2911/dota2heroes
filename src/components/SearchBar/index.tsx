import {FC} from "react"
import {Wrapper} from "./SearchBar.styles"
import Attribute from "./Attribute"
import Type from "./Type"
import Search from "./Search"

const SearchBar:FC = () => {
	return (
		<Wrapper>
			<div>Filter</div>
			<Attribute />
			<Type />
			<Search />
		</Wrapper>
	)
}

export default SearchBar