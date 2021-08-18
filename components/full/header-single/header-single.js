const HeaderTemplate = document.createElement('template');
HeaderTemplate.innerHTML = allStyles + `
<style>

.container-header {
  
  width: 100%;
  margin-bottom: 160px;
  padding: 0;
}
.header-box {
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
}
#full-bleed-column {
  min-height: 100vh;
  text-align: center;
}
.text {
  text-align: left;
  text-indent: 116px;
}
.spacing {
  padding: 20px;
}
.name {
  text-transform: uppercase;
  // padding: 20px 0;
  font-family: "Arial", sans-serif !important;
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
.img-container {
  margin-top: 204px;
}
</style>
<div class="container-fluid d-flex container-header">

  <div class="header-box"></div>
  <div class="header-bg" id="full-bleed-column" class="col-12">
    <span class="spacing"> <span class="name" id="nameSlot"></span></span>
    <span class="mt-5" id="h1-with-bottom-margin"></span>
  <div class="container-fluid">
  <div class="row">
    <p class="text header-text col-sm-12 col-md-5">
    <slot  name="text"></slot>
    </p>
 <div class="col-1"></div>
 

  <div id="container" class="container-fluid col-sm-12 col-md-6 img-container">
 
    <img class="col-12" id="imgOne" src="" alt="">
    <p id="caption-box" class="col-12 justify-content-left caption">
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
    setupComponent(this, HeaderTemplate);

    let headlineName = "<h4><span slot='title'>" + this.getAttribute('creatorsName') + "</span></h4>";
    this.shadowRoot.getElementById('nameSlot').innerHTML = headlineName;

    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('ImgPath');
    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('AltImg');

    createNestedComponent(this, 'h1-with-bottom-margin', ['', ''], 'col-12', ['title']);//this, name, [array with attributes], columns, [text slot]


  }
}

window.customElements.define('header-single', HeaderSingle);

