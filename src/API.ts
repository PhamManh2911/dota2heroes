import {ALL_HEROES_URL as URL} from "./config"

const fetchHeroes = async(searchTerm: string) => {
	const dataFromSessionStorage = sessionStorage.getItem("all_heroes")
	if (dataFromSessionStorage !== null) return JSON.parse(dataFromSessionStorage)
	const data: any = sortData(await (await fetch(URL)).json())
	sessionStorage.setItem("all_heroes", JSON.stringify(data))
	return data
}

const sortData = (data: any[]) => {
	return data.sort((a, b) => {
		let x = a.localized_name.toLowerCase();
		let y = b.localized_name.toLowerCase();
		if (x < y) {return -1;}
		if (x > y) {return 1;}
		return 0;
	})
}

export {fetchHeroes}