//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const imgFullWidthVarHeight = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
imgFullWidthVarHeight.innerHTML = allStyles + `
<style>
img {
    width: 100%;
    height: auto;
} 

p {
  margin-top: 16px;
  font-size:14px;
  line-height: 16px;
  margin-left: 16px;
}
.caption {
  margin: 0;
  margin-top: 16px;
}
#container {
  margin-bottom: 36px;
  padding-left: 0;
  padding-right: 0;
}

</style>

<div id="container" class="container-fluid">
    <img id="img" src="" alt="">
    <p class="col-12 caption p-0" id="captionOne">
    <slot name="caption"></slot>
    
    </p>
</div>

`;

//initializing our class
class ImgFullWidthVarHeight extends HTMLElement {
  constructor(){
    super();
    setupComponent(this, imgFullWidthVarHeight);

    this.shadowRoot.querySelector('#img').src = this.getAttribute('imgPath');
    
    this.shadowRoot.querySelector('#img').alt = this.getAttribute('altImg');
  }
}
window.customElements.define('image-full-width-var-height', ImgFullWidthVarHeight);