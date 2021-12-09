import {useState, useEffect} from "react"

const set = (width: number) => {
	if (width > 960) return 4
	if (width > 747) return 3
	return 2
}

export default function useResizeWidth() {
	const [row, setRow] = useState(() => set(window.innerWidth))
	const handleResize = () => {
		if (window.innerWidth > 960) return setRow(4)
		if (window.innerWidth > 717) return setRow(3)
		if (window.innerWidth > 474) return setRow(2)
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	},[])

 	return [row]
} 