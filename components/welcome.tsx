export function Welcome() {
	return (
		<section id="welcome" className="welcome">
			<div className="welcome-container">
				<h1 className="welcome-title">Хакасия</h1>
				<p className="welcome-subtitle">Туристическое Агенство Республики Хакасия</p>
			</div>
			<button id="scroll" className="btn_scroll">
				<a href="#attractions" className="scroll-to"><img src="img/Icon - Go down.svg" alt="" /></a>
			</button>
		</section>
	)
}