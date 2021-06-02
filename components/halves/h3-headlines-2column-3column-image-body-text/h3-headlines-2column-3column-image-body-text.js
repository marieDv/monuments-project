// IMAGE LEFT TEXT RIGHT
// Attributes: altImg, imgPath, caption
// components nested: variable text slots


const h3Headlines2Column3ColumnImageBodyText = document.createElement("template");
h3Headlines2Column3ColumnImageBodyText.innerHTML = allStyles + `

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
    <div class="col-md-2 col-sm-12">
      <div id="img1"></div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div id="img2"></div>
    </div>
    <div class="col-md-1 col-sm-12">
    </div>
    <div class="col-md-6 col-sm-12">
      <div id="headline"></div>
      <div id="variable-text-slot"></div>
    </div>
  <div>
</div> 

`;

//initializing our class
class halvesH3Headlines2Column3ColumnImageBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, h3Headlines2Column3ColumnImageBodyText);

    createComponentFromSlot(this, 'headline');
    createVariableComponents(this, 'variable-text-slot');
    createComponentFromSlot(this, 'img1');
    createComponentFromSlot(this, 'img2');
  }
}
window.customElements.define('halves-h3-headlines-2column-3column-image-body-text', halvesH3Headlines2Column3ColumnImageBodyText);














