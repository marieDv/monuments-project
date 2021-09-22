// IMAGE LEFT TEXT RIGHT
// Attributes: altImg, imgPath, caption
// components nested: variable text slots


let h3Headlines2Column3ColumnImageBodyTextTemplate = document.createElement("template");
h3Headlines2Column3ColumnImageBodyTextTemplate.innerHTML = allStyles + `

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
#border {
  position: absolute;
  width: 1px;
  height: 200px;
  margin: 0 auto;
  right: 0;
  left: -1px;
}
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-2 col-sm-12">
      <div id="1-img"></div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div id="2-img"></div>
    </div>
    <div class='' id='border'>
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
    setupComponent(this, h3Headlines2Column3ColumnImageBodyTextTemplate);

    createComponentFromSlot(this, 'headline');
    createVariableComponents(this, 'variable-text-slot');
    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-img');
    if (this.getAttribute("hasBorder") === "true") {
      this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
  }
}
window.customElements.define('halves-h3-headlines-2column-3column-image-body-text', halvesH3Headlines2Column3ColumnImageBodyText);














