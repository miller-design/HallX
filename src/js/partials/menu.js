const Panel = document.querySelector('.js-menu-panel')
const Switch = document.querySelector('.js-menu-trigger')
const closeSwitch = document.querySelector('.js-menu-close')
const MenuLink = document.querySelectorAll('.js-menu-link')
const Overlay = document.querySelector('.js-page-overlay')
const darkHeader = document.querySelector('.js-dark-header')

if(Switch != null) {

	Switch.addEventListener('click', (e) => {

		if(Switch.classList.contains('is-active')) {
			Switch.classList.remove('is-active')
			Overlay.classList.remove('is-active')
			Panel.classList.remove('is-active')
		} else {
			Switch.classList.add('is-active')
			Overlay.classList.add('is-active')
			Panel.classList.add('is-active')
		}
	})
}

if(MenuLink != null) {

	MenuLink.forEach(link => {
		
		const activeLink = link.hasAttribute('aria-current')

		if(activeLink == true) {
			link.classList.add('is-active')
			link.addEventListener('click', (e) => {
				e.preventDefault()
				Switch.classList.remove('is-active')
				Panel.classList.remove('is-active')
				Overlay.classList.remove('is-active')
			})
		}
	})
}

