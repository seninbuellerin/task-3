import { useState, useEffect } from "react"
import { BurgerMenu } from "./burger-menu"
import { Navigation } from "./navigation"

export function Header() {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
	const [isPageScrolled, setPageScrolled] = useState<boolean>(false)

	function onMenuClick() {
		setMenuVisible(!isMenuVisible);
	}

	const handlePageScroll = () => {
		if (window.scrollY > 100) {
			setPageScrolled(true)
		} else {
			setPageScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll)

		return () => window.removeEventListener('scroll', handlePageScroll)
	})
	return (
		<header id="header" className={`header${isPageScrolled ? ' header_fixed' : ''}`}>
			<div className="nav">
				<img className="logo" src="img/logo 1.svg" alt="" />
				<Navigation />
				<div className={`burger${isMenuVisible ? ' burger_active' : ''}`} onClick={onMenuClick} id="burger_id">
					<span className="burger__line burger__line_first"></span>
					<span className="burger__line burger__line_second"></span>
					<span className="burger__line burger__line_third"></span>
					<span className="burger__line burger__line_fourth"></span>
				</div>
				<BurgerMenu isMenuVisible={isMenuVisible} />
			</div>
		</header>
	)
}