const FormScripts = () => {

	// makes text area resize when input needs to grow
	document.addEventListener('input', function (event) {
		
		if (event.target.tagName.toLowerCase() !== 'textarea') {
			return
		} else {
			const field = event.target
			field.style.height = '60px';
			const height = field.scrollHeight
			field.style.height = height + 'px'
		}
	}, false)

	const formInputs = document.querySelectorAll('.js-form-field')

	formInputs.forEach((input) => {
		// select all labels next to form elements
		const label = input.nextElementSibling
		// when input is typed in check to see if label needs active state
		input.addEventListener('keyup', () => {
			activateLabel(label, input)
		})
		// acticate when input is focused
		input.addEventListener('focus', () => {
			activateLabel(label, input)
		})
		// when input is not the active element
		input.addEventListener('blur', () => {
			activateLabel(label, input)
		})
	})

	const activateLabel = (label, input) => {

		if(input.value.length != 0 || input === document.activeElement) {
			label.classList.add('js-fake-placeholder')
		} else {
			label.classList.remove('js-fake-placeholder')
		}
	}
}

FormScripts()