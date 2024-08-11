class MyCustomElement extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._internals = this.attachInternals();
		this.addEventListener('click', this.onClickHandler.bind(this));
	}

	onClickHandler() {
		this.collapsed = !this.collapsed;
	}

	get collapsed() {
		return this.classList.contains('hidden');
	}

	set collapsed(flag) {
		if (flag) {
			// Existence of identifier corresponds to "true"
			this.classList.add('hidden');
		} else {
			// Absence of identifier corresponds to "false"
			this.classList.remove('hidden');
		}
	}
}

// Register the custom element
customElements.define('my-custom-element', MyCustomElement);
