export interface TourBlock {
	class: string,
	title: string,
	description: string,
	price: string
}

export interface TourProps {
	tour: TourBlock
}

export function Tour(props: TourProps) {
	return (
		<article className={props.tour.class}>
			<div className="tours-item__gradient" ></div>
			<h4>{props.tour.title}</h4>
			<p>{props.tour.description} </p>
			<p>От <b>{props.tour.price}</b> р.</p>
			<button className="buy_btn">Купить</button>
		</article>
	)
}