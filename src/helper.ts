import {Hero} from "./hooks/useFetchHeroes"

const filterBySearch = (hero: Hero, search: string) => {
	if (hero.localized_name.replace(/ /g, "").replace(/-/g,"").toLowerCase().includes(search.toLowerCase().replace(/ /g, ""))) return true
	return false
}

const filterByAttribute = (hero: Hero, attribute: string) => {
	if (hero.primary_attr === attribute || attribute === "") return true
	return false
}

const filterByType = (hero: Hero, type: string) => {
	if (hero.attack_type.toLowerCase() === type || type === "") return true
	return false
}

const filterAll = (hero:Hero, search:string, attribute:string, type: string) => {
	return filterBySearch(hero, search) && filterByAttribute(hero, attribute) && filterByType(hero, type)
}

const getResultAfterFilter = (heroes: Hero[], search: string, attribute: string, type: string) => {
	return heroes.filter((hero:Hero) => filterAll(hero, search, attribute, type))
}

export {
	filterAll,
	getResultAfterFilter
}