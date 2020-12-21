const PopUp = document.querySelector('.js-popup')
const footerEl = document.querySelector('footer')
const popUpCloseTrigger = document.querySelector('.js-popup-close')

if(PopUp != null) {

	window.addEventListener("scroll", () => {

		let footerPosition = footerEl.offsetTop - window.innerHeight
		let scrollPos = window.scrollY

		if(!PopUp.classList.contains('is-hidden')) {

			if(scrollPos > footerPosition) {
				PopUp.classList.remove('is-active')
			} else {
				PopUp.classList.add('is-active')
			}
		}
	})

	popUpCloseTrigger.addEventListener('click', () => {

		PopUp.classList.add('is-hidden')
		PopUp.classList.remove('is-active')
	})
}