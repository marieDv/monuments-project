const H1WithBottomMarginTemplate = document.createElement('template');
H1WithBottomMarginTemplate.innerHTML = templateStyle + bootstrapLink+ `
<style>

</style>
<div  class="container d-flex justify-content-center">
<h1></h1>
</div>
`;

class H1WithBottomMargin extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(H1WithBottomMarginTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('title');
  }
}

window.customElements.define('h1-with-bottom-margin', H1WithBottomMargin);