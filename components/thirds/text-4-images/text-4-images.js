// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const ThirdsText4ImagesTemplate = document.createElement("template");
ThirdsText4ImagesTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}

</style>

<div id="container" class="container-fluid">
<div class="row">

<div class="col-md-4 col-sm-12">
<span id="variable-text-slot"></span>
</div>

<div class="col-md-8 col-sm-12 container-fluid">
<div class="row">

  <div class="col-md-6 col-sm-12">
    <span id="1-img"></span>
    <span id="2-img"></span>
  </div>
  <div class="col-md-6 col-sm-12">
   <span id="3-img"></span>
   <span id="4-img"></span>
  </div>

</div>
</div>


</div>
</div> 

`;

class ThirdsText4Images extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, ThirdsText4ImagesTemplate);

    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-img');
    createComponentFromSlot(this, '3-img');
    createComponentFromSlot(this, '4-img');
    createVariableComponents(this, 'variable-text-slot');

  }
}
window.customElements.define('thirds-text-4-images', ThirdsText4Images);














