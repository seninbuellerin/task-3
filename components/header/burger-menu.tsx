export interface MenuVisible { isMenuVisible: boolean }

export function BurgerMenu(props: MenuVisible) {
	return (
		<div className={`burger_menu${props.isMenuVisible ? ' active' : ''}`}>
			<ul>
				<li>
					<a href="#welcome" className="link-to">
						Главная
					</a>
				</li>
				<li>
					<a href="#attractions" className="link-to">
						Достопремичательности
					</a>
				</li>
				<li>
					<a href="#tours" className="link-to">
						Туры
					</a>
				</li>
				<li>
					<a href="#contacts" className="link-to">
						Контакты
					</a>
				</li>
			</ul>
		</div>
	)
}