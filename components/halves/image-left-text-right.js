// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


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
<div class="row">
<div id="variable-text-base" class="col-md-5 col-sm-12">
</div>

<div class="col-1"></div>
<span id="h3-with-bottom-margin"></span>
<div class="col-md-6 col-sm-12" id="image-six-columns-var-height"></div>
</div>
</div> 

`;

//initializing our class
class halvesImageLeftTextRight extends HTMLElement {
  constructor() {
    super();
    setupComponent(this);
    createNestedComponent(this, 'image-six-columns-var-height', ['imgPath', 'altImg'], 'col-12', ['caption']);//this, name, [array with attributes], columns, [text slot]
    createVariableText(this, 'variable-text-base');
  }
}
window.customElements.define('halves-image-left-text-right', halvesImageLeftTextRight);


  // let fullImgComponentPath = "<image-six-columns-var-height colWidth='col-12' imgPath='" + this.getAttribute('ImgPath') + "' altImg='" + this.getAttribute('altImg') + "'><span slot='caption'>" + this.getAttribute('caption') + "</span></image-six-columns-var-height>";
  // createNestedComponent(this, 'h3-with-bottom-margin', [], 'col-12', ['title']);//this, name, [array with attributes], columns, [text slot]