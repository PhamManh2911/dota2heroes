import {Dispatch} from "react"
import {Actions} from "./action"
import {Hero} from "./useFetchHeroes"

export default interface Context {
	heroes: Hero[],
	attr: string,
	searchTerm: string,
	type: string,
	dispatch: Dispatch<Actions>
}

export const defaultValue = {
	heroes: [],
	attr: "",
	searchTerm: "",
	type: "",
	dispatch: () => {return}
}