import {createContext} from "react"
import HeroImage from "./components/HeroImage"
import Menu from "./components/Menu"
import NotFound from "./components/NotFound"
import Grid from "./components/Grid"
import useFetchHeroes from "./hooks/useFetchHeroes"
import useResizeWidth from "./hooks/useResizeWidth"
import {Hero} from "./hooks/useFetchHeroes"
import {BASE_IMAGE_URL, PNG} from "./config"
import {filterAll, getResultAfterFilter} from "./helper"
import Context, {defaultValue} from "./hooks/context"
	
export const StateContext = createContext<Context>(defaultValue)

export default function Home() {
	const {heroes, attr, type, dispatch, searchTerm} = useFetchHeroes()
	const [row] = useResizeWidth()
	return (
		<StateContext.Provider value={{heroes, attr, type, dispatch, searchTerm}}>
			<HeroImage />
			<Menu
			height={Math.floor((getResultAfterFilter(heroes, searchTerm, attr, type).length)/row) + 1}
			>
				{getResultAfterFilter(heroes, searchTerm, attr, type).length === 0
					? <NotFound />
					: heroes.map((hero: Hero) => 
					<Grid 
						key={hero.id}
						index={filterAll(hero, searchTerm, attr, type)
							? getResultAfterFilter(heroes, searchTerm, attr, type).indexOf(hero)
							: 0
						}
						row={row}
						image={`${BASE_IMAGE_URL}${hero.name.slice(14)}${PNG}`}
						name={hero.localized_name}
						attribute={hero.primary_attr}
						dissappear={filterAll(hero, searchTerm, attr, type) 
							? undefined 
							: "dissappear"
						}
						/>
					)}
			</Menu>
		</StateContext.Provider>
	)
}