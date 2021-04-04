const HeaderTemplate = document.createElement('template');
HeaderTemplate.innerHTML = allStyles + `
<style>
h1 {
  font-size: 100px;
  text-align: center;
  font-weight: 400;
  line-height: 88px;
  margin-bottom: 46px;
  text-transform: uppercase;

}
.header-bg {
  height: 100vh;
  width: 100%;
}
</style>
<div class="">
aasdsad
</div>
`;
//<div class="container d-flex justify-content-center header-bg">
/* <h1-with-bottom-margin title="I am the headline of the header">
</h1-with-bottom-margin>
<span>this is a subheadline</span>
</div> */
class HeaderSingle extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(HeaderTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('title');
  }
}

window.customElements.define('header-single', HeaderSingle);