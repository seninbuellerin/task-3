export interface AttractionBlock {
	class: string
	title: string
	image: string
	text: string
	hide: string
}

export interface AttractionProps {
	attraction: AttractionBlock
}

export function Attraction(props: AttractionProps) {
	return (
		<div className={props.attraction.class}>
			<img className="attractions-item__img" src={props.attraction.image} alt="" />
			<div className="attractions-item__text">
				<h3>{props.attraction.title}</h3>
				<p>{props.attraction.text}
					<br /><br />
					<span className="hide">{props.attraction.hide}</span></p>
			</div>
		</div>
	)
}