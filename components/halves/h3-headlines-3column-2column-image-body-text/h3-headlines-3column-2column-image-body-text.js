// IMAGE LEFT TEXT RIGHT
// Attributes: altImg, imgPath, caption
// components nested: variable text slots


const h3Headlines3Column2ColumnImageBodyText = document.createElement("template");
h3Headlines3Column2ColumnImageBodyText.innerHTML = allStyles + `

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
    <div class="col-md-3 col-sm-12">
      <div id="1-img"></div>
    </div>
    <div class="col-md-2 col-sm-12">
      <div id="2-img"></div>
    </div>
    <div class='col-md-1' id='border'></div>
    <div class="col-md-5 col-sm-12">
      <div id="headline"></div>
      <div id="variable-text-slot"></div>
    </div>
  <div>
</div> 

`;

//initializing our class
class halvesH3Headlines3Column2ColumnImageBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, h3Headlines3Column2ColumnImageBodyText);

    createComponentFromSlot(this, 'headline');
    createVariableComponents(this, 'variable-text-slot');
    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-img');
    if (this.getAttribute("hasBorder") === "true") {
      this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
  }
}
window.customElements.define('halves-h3-headlines-3column-2column-image-body-text', halvesH3Headlines3Column2ColumnImageBodyText);














