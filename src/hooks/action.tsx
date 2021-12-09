import {Hero} from "./useFetchHeroes"

export type Actions = {
	type: "toggle_loading" | "true_err" | "false_err"
}
| {
	type: "set_heroes",
	data: Hero[]
}
| {
	type: "set_search_term" | "set_attr" | "set_type" ,
	data: string
}