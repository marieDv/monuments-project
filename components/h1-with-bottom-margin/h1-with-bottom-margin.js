const H1WithBottomMarginTemplate = document.createElement('template');
H1WithBottomMarginTemplate.innerHTML = allStyles + `
<style>
h1 {
  font-size: 100px;
  text-align: center;
  font-weight: 400;
  line-height: 88px;
  margin-bottom: 46px;
  text-transform: uppercase;

}
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