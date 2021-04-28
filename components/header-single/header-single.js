const HeaderTemplate = document.createElement('template');
HeaderTemplate.innerHTML = allStyles + `
<style>

.header-bg {
  height: 100vh;
  width: 100%;
  margin-bottom: 64px;
}
#full-bleed-column {
  text-align: center;
}
.text {
  text-align: left;
}
.spacing {
  padding: 20px;
}
.name {
  text-transform: uppercase;
  // padding: 20px 0;
}
#caption {
  margin-top: 16px;
text-align: left;
  font-size: 12px;
  line-height: 14px;
}
#caption-box {
  text-align: left;
  padding-left: 22px;
}
</style>
<div class="container-fluid d-flex header-bg">
<div id="full-bleed-column" class="col-12">
<span class="spacing"> <span class="name" id="nameSlot"></span></span>
 <span class="mt-5" id="slot-h1"></span>
 <div class="container-fluid">
 <div class="row">
 <p class="text col-5">
 <slot  name="text"></slot>
 </p>
 <div class="col-1"></div>
 

 <div id="container" class="container-fluid col-6">
    <img class="col-12" id="imgOne" src="" alt="">
    <p id="caption-box" class="col-6 justify-content-left caption">
    <slot class="" id="caption" name="caption"/>
    </p>
</div>


 </div>
 </div>
</div>
</div> 
`;
// justify-content-center
class HeaderSingle extends HTMLElement {


  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(HeaderTemplate.content.cloneNode(true));


    let headlineName = "<h3-with-bottom-margin><span slot='title'>" + this.getAttribute('creatorsName') + "</span></h3-with-bottom-margin>";
    this.shadowRoot.getElementById('nameSlot').innerHTML = headlineName;

    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('ImgPath');
    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('AltImg');

    this.shadowRoot.getElementById('slot-h1').innerHTML = "<h1-with-bottom-margin id='headline' title='" + this.getAttribute('title') + "' class='mt-5'></h1-with-bottom-margin>";
    // this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
    // this.shadowRoot.getElementById('slot-h2').innerHTML = "<h2-with-bottom-margin text='"+this.getAttribute("h2Title")+"'></h2-with-bottom-margin>";
    // this.shadowRoot.querySelector('img-full-width-var-height').imgPath = this.getAttribute("imgPath");
  }
}

window.customElements.define('header-single', HeaderSingle);

