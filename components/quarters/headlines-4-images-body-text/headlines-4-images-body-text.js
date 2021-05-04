// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const headlines4ImagesBodyTextTemplate = document.createElement("template");
headlines4ImagesBodyTextTemplate.innerHTML = allStyles + `

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
<div class="col-4">
<span id="h3-with-bottom-margin"></span>
<div id="var1"></div>
<div id="img1"></div>
</div>
<div class="col-4">
<div id="var2"></div>
<div id="img2"></div>
</div>
<div class="col-4">
<div id="var3"></div>
<div id="img3"></div>
</div>

</div>
</div>
</div> 

`;

//initializing our class
class headlines4ImagesBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, headlines4ImagesBodyTextTemplate);

    // createNestedComponent(this, 'image-six-columns-var-height', ['imgPath'],'',['caption'], 'imageOne');
    // createNestedComponent(this, 'image-six-columns-var-height', ['imgPath'],'',['caption'], 'imageTwo');
    // createNestedComponent(this, 'image-six-columns-var-height', ['imgPath'],'',['caption'], 'imageThree');
    // createNestedComponent(this, 'image-six-columns-var-height', ['imgPath'],'',['caption'], 'imageFour');
    // createNestedComponent(this, 'image-six-columns-var-height', ['imgPath', 'altImg'], 'col-4', ['caption']);//this, name, [array with attributes], columns, [text slot]

    createComponentFromSlot(this, 'img1', '1');
    createComponentFromSlot(this, 'img2', '2');
    createComponentFromSlot(this, 'img3', '3');
    createComponentFromSlot(this, 'img4', '4');

    createSingleNestedComponent(this, 'h3-with-bottom-margin', [], '', ['title']);
    createVariableText(this, 'var1', '1');
    createVariableText(this, 'var2', '2');
    createVariableText(this, 'var3', '3');
  }
}
window.customElements.define('headlines-4-images-body-text', headlines4ImagesBodyText);














