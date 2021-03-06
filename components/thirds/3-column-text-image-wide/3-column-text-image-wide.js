// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const thirds3ColumnTextImageWideTemplate = document.createElement("template");
thirds3ColumnTextImageWideTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}

</style>

<div id="cotainer" class="container-fluid">
<div class="row">

<div class="col-md-3 col-sm-12">
  <span id="variable-text-slot"></span>
</div>
<div class="col-md-9 col-sm-12">
<div id="img"></div>
</div>

</div>
</div> 

`;

//initializing our class
class thirds3ColumnTextImageWide extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, thirds3ColumnTextImageWideTemplate);

    // createComponentFromSlot(this, '1-headline');
    // createComponentFromSlot(this, '1-subheadline');
    createVariableComponents(this, 'variable-text-slot');
    createComponentFromSlot(this, 'img');

  }
}
window.customElements.define('thirds-3-column-text-image-wide', thirds3ColumnTextImageWide);














