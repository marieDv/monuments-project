// IMAGE LEFT TEXT RIGHT
// Attributes: altImg, imgPath, caption
// components nested: variable text slots


const imageLeftTextRight = document.createElement("template");
imageLeftTextRight.innerHTML = allStyles + `

<style>
img {
    width: 100%;
    height: auto;
} 

p {
  margin-top: 16px;
  font-size:14px;
  line-height: 16px;
}

#container {
  margin-top: 36px;
}

</style>

<div class="container-fluid">
<span id="h1-with-bottom-margin"></span>
<div class="row">
<div id="variable-text-base" class="col-md-5 col-sm-12">
</div>

<div class="col-1"></div>
<span id="h3-with-bottom-margin"></span>
<div class="col-md-6 col-sm-12" id="image-full-width-var-height"></div>
</div>
</div> 

`;

//initializing our class
class halvesImageLeftTextRight extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, imageLeftTextRight);

    createNestedComponent(this, 'h1-with-bottom-margin', [],'',['caption']);
    createNestedComponent(this, 'image-full-width-var-height', ['imgPath', 'altImg'], 'col-4', ['caption']);//this, name, [array with attributes], columns, [text slot]

   
    createVariableText(this,'variable-text-base', '');
  }
}
window.customElements.define('halves-image-left-text-right', halvesImageLeftTextRight);














