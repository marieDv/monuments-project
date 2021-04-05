const HeaderTemplate = document.createElement('template');
HeaderTemplate.innerHTML = allStyles + `
<style>

.header-bg {
  height: 100vh;
  width: 100%;
}
</style>
<div class="container-fluid d-flex justify-content-center header-bg">
<div id="variable-column" class="">
<span class="mt-5" id="slot-h1"></span>
</div>
</div> 
`;

class HeaderSingle extends HTMLElement {


  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(HeaderTemplate.content.cloneNode(true));

    this.shadowRoot.getElementById('slot-h1').innerHTML = "<h1-with-bottom-margin id='headline' title='" + this.getAttribute('title') + "' class='mt-5'></h1-with-bottom-margin>";
    this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
    // this.shadowRoot.getElementById('slot-h2').innerHTML = "<h2-with-bottom-margin text='"+this.getAttribute("h2Title")+"'></h2-with-bottom-margin>";
    // this.shadowRoot.querySelector('img-full-width-var-height').imgPath = this.getAttribute("imgPath");
  }
}

window.customElements.define('header-single', HeaderSingle);

