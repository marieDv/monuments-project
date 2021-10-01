const H1WithBottomMarginTemplate = document.createElement('template');
H1WithBottomMarginTemplate.innerHTML = allStyles + `
<style>
h1 {
  text-align: center;
  margin-bottom: 46px;
  text-transform: uppercase;
  font-size: 120px;
  line-height: 100px;
}
@media only screen and (max-width: 720px) {
  h1 {
    font-size: 42px;
  }
}
</style>
<div class="container d-flex justify-content-center">
  <h1>
    <slot name="title"></slot>
  </h1>
  <p>


</div>
`;

class H1WithBottomMargin extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, H1WithBottomMarginTemplate);
  }
}

window.customElements.define('h1-with-bottom-margin', H1WithBottomMargin);