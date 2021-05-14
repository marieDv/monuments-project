// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const Thirds2ColumnsTextImagesRightTemplate = document.createElement("template");
Thirds2ColumnsTextImagesRightTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}

</style>

<div id="cotainer" class="container-fluid">
<div class="row">
  <div id="1-variable-text-slot" class="col-md-4 col-sm-12">
  </div>
  <div id="2-variable-text-slot" class="col-md-4 col-sm-12">
  </div>
  <div class="col-md-4 col-sm-12">
  <span id="1-img"></span>
  <span id="2-img"></span>
  <span id="3-img"></span>
  </div>
</div>
</div> 

`;

//initializing our class
class Thirds2ColumnsTextImagesRight extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Thirds2ColumnsTextImagesRightTemplate);
    createVariableComponents(this, '1-variable-text-slot');
    createVariableComponents(this, '2-variable-text-slot');
    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-img');
    createComponentFromSlot(this, '3-img');
    
    // createComponentFromSlot(this, 'img');

  }
}
window.customElements.define('thirds-2-columns-text-images-right', Thirds2ColumnsTextImagesRight);














