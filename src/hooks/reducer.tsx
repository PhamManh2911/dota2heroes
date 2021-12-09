import {Actions} from "./action"
import {State} from "./useFetchHeroes"

export const reducer = (state: State, action: Actions) => {
	switch (action.type) {
		case "toggle_loading":
			return {
				...state,
				loading: !state.loading
			}
		case "true_err": 
			return {
				...state,
				err: true
			}
		case "false_err": 
			return {
				...state,
				err: false
			}
		case "set_heroes":
			return {
				...state,
				heroes: action.data
			}
		case "set_search_term":
			return {
				...state,
				searchTerm: action.data
			}
		case "set_attr":
			return {
				...state,
				attr: state.attr === action.data ? "" : action.data
			}
		case "set_type":
			return {
				...state,
				type: state.type === action.data ? "" : action.data
			}
		default: 
			return state
	}
}