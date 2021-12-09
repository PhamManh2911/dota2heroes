import {FC, useState, useEffect} from "react"
import {Wrapper, Text, Content} from "./Menu.styles"
import SearchBar from "../SearchBar"

interface Props {
	height: number
}

const Menu:FC<Props> = ({children, height}) => {
	const [isAppear, setAppear] = useState(false)

	useEffect(() => {
		const targetElement = document.querySelector("#target")
		const isInViewport = (element: any) => {
			const elementRect = element.getBoundingClientRect()
			return (elementRect.top < window.innerHeight)
		}
		const handleScroll = () => {
			if (isInViewport(targetElement)) return setAppear(true)
			return setAppear(false)
		}
		document.addEventListener("scroll", handleScroll)
		return () => document.removeEventListener("scroll", handleScroll)
	},[isAppear])

	return (
		<Wrapper>
			<Text>
				<span>Who will you</span>
				<span><br />choose?</span>
			</Text>
			<SearchBar />
			<Content 
				id="target" 
				heightWidth={height} 
				className={isAppear ? "appear" : ""}
			>
				{children}
			</Content>
		</Wrapper>
	)
}

export default Menu