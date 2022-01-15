import { Attraction, AttractionBlock } from "./attraction"

const ourAttraction: AttractionBlock[] = [
	{
		class: "attractions-item",
		title: "Тропа предков",
		image: "img/DJI_0185-Pano 1.jpg",
		text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
		hide: "Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.",
	},
	{
		class: "attractions-item swap",
		title: "Озеро Беле",
		image: "img/DJI_0185-Pano 1.jpg",
		text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
		hide: "Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.",
	},
	{
		class: "attractions-item",
		title: "Сундуки",
		image: "img/DJI_0185-Pano 1.jpg",
		text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
		hide: "Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.",
	},
]

export function Attractions() {
	return (
		<section id="attractions" className="attractions">
			<h2>Достопримечательности</h2>
			{
				ourAttraction.map((item: AttractionBlock, index: number) =>
					<Attraction attraction={item} key={`attraction_${index}`} />)
			}
		</section>
	)
}