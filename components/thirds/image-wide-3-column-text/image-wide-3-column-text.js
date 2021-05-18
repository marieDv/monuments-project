// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const ThirdsImageWide3ColumnTextTemplate = document.createElement("template");
ThirdsImageWide3ColumnTextTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}

</style>

<div id="cotainer" class="container-fluid">
I AM RENDERED
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
class ThirdsImageWide3ColumnText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, ThirdsImageWide3ColumnTextTemplate);
    // createVariableComponents(this, '1-variable-text-slot');
    // createVariableComponents(this, '2-variable-text-slot');
    createComponentFromSlot(this, '1-img');
    // createComponentFromSlot(this, '2-img');
    // createComponentFromSlot(this, '3-img');
    
    // createComponentFromSlot(this, 'img');

  }
}
window.customElements.define('thirds-image-wide-3-column-text', ThirdsImageWide3ColumnText);














