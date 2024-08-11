import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

class MyCustomLitElement extends LitElement {
	@property({ reflect: true, type: Boolean })
	collapsed;

	constructor() {
		super();
		this.collapsed = false;
	}

	toggleCollapsed() {
		this.collapsed = !this.collapsed;

		if (this.collapsed) {
			this.setAttribute('collapsed', 'collapsed');
		} else {
			this.removeAttribute('collapsed');
		}
		// TODO: Why do we need this?
		this.requestUpdate();
	}

	render() {
		return html`<section
			class=${classMap({ hidden: this.collapsed })}
			@click=${this.toggleCollapsed}
		>
			<slot />
		</section>`;
	}
}

// Register the custom element
customElements.define('my-custom-lit-element', MyCustomLitElement);
