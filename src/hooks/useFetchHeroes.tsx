import {useEffect, useReducer} from 'react'
import {fetchHeroes} from "../API"
import {reducer} from "./reducer"

const initialState = {
	heroes: [],
	searchTerm: "",
	attr: "",
	type: "",
	loading: false,
	err: false
}

export interface State {
	heroes: Hero[],
	searchTerm: string,
	attr: string,
	type: string;
	loading: boolean,
	err: boolean
}

export interface Hero {
	name: string,
	id: number,
	localized_name: string,
	primary_attr: string,
	attack_type: string
}
 
export default function useFetchHeroes() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		try {
			dispatch({type: "toggle_loading"})
			const fetch = async(searchTerm: string) => {
				const data = await fetchHeroes(searchTerm)
				dispatch({type: "set_heroes", data})
			}			
			fetch(state.searchTerm)
			dispatch({type: "toggle_loading"})
		} catch(err) {
			dispatch({type: "true_err"})
		}
	},[state.searchTerm])

	return {
		heroes: state.heroes,
		searchTerm: state.searchTerm,
		attr: state.attr,
		type: state.type,
		loading: state.loading,
		dispatch
	}
} 