const HeaderTemplate = document.createElement('template');
HeaderTemplate.innerHTML = allStyles + `
<style>

.header-bg {
  height: 100vh;
  width: 100%;
}
</style>
<div class="container-fluid d-flex justify-content-center header-bg">
<span id="slot-h1"></span>
<span id="slot-img"></span>
</div> 
`;

class HeaderSingle extends HTMLElement {


  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(HeaderTemplate.content.cloneNode(true));

    this.shadowRoot.getElementById('slot-h1').innerHTML = "<h1-with-bottom-margin id='headline' title='" + this.getAttribute('title') + "' class='mt-5'></h1-with-bottom-margin>";
    this.shadowRoot.getElementById('slot-img').innerHTML = "<img-full-width-var-height ImgPath='" + this.getAttribute("imgPath") + "' altImg='" + this.getAttribute("altImg") + "' Caption='This is an image'></img-full-width-var-height>"
    this.shadowRoot.querySelector('img-full-width-var-height').imgPath = this.getAttribute("imgPath");
  }
}

window.customElements.define('header-single', HeaderSingle);

