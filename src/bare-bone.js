import { LitElement, html } from "lit-element";

class BareBone extends LitElement {
  constructor() {
    super();
    this.header = "My Example";
  }

  render() {
    return html`
      <h1>Hello world!</h1>
    `;
  }
}

customElements.define("bare-bone", BareBone);
