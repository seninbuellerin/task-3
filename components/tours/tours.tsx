import { useState } from "react"
import { Tour, TourBlock } from "./tour"

const ourTours: TourBlock[] = [
	{
		class: "tours-item",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "10000",
	},
	{
		class: "tours-item",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "15000",
	},
	{
		class: "tours-item tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "20000",
	},
	{
		class: "tours-item tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "25000",
	},
	{
		class: "tours-item tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "30000",
	},
	{
		class: "tours-item tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "35000",
	},

]

export function Tours() {
	const [buttonName, setButtonName] = useState("Больше туров")
	const [clickButtonMoreTours, setclickButtonMoreTours] = useState(false)
	const ClickMoreTours = () => {
		if (buttonName == "Больше туров") {
			setButtonName("Скрыть туры")
			setclickButtonMoreTours(!clickButtonMoreTours)
		} else {
			setButtonName("Больше туров")
			setclickButtonMoreTours(!clickButtonMoreTours)
		}
	}
	return (
		<section id="tours" className="tours">
			<div className="container">
				<h2>Туры</h2>
				<div className={`list${clickButtonMoreTours ? ' list--all-hidden-visible' : ''}`}>
					{
						ourTours.map((item: TourBlock, index: number) =>
							<Tour tour={item} key={`tours_${index}`} />
						)
					}
				</div>
				<div className="button_more_position">
					<button className="button_more" onClick={ClickMoreTours}>{buttonName}</button>
				</div>
			</div>
		</section>
	)
}