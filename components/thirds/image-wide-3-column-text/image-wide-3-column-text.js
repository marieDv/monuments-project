// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const thirdsImageWide3ColumnTextTemplate = document.createElement("template");
thirdsImageWide3ColumnTextTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}

</style>

<div id="cotainer" class="container-fluid">
<div class="row">

<div class="col-md-9 col-sm-12">
<div id="img"></div>
<div class="col-md-3 col-sm-12">
  <span id="variable-text-slot"></span>
</div>
</div>

</div>
</div> 

`;

//initializing our class
class thirdsImageWide3ColumnText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, thirdsImageWide3ColumnTextTemplate);
    alert('am i even existing')
    console.log("asdkasdk")
    // createComponentFromSlot(this, '1-headline');
    // createComponentFromSlot(this, '1-subheadline');
   createComponentFromSlot(this, 'img');
    createVariableComponents(this, 'variable-text-slot');

  }
}
window.customElements.define('thirds-image-wide-3-column-text', thirdsImageWide3ColumnText);














