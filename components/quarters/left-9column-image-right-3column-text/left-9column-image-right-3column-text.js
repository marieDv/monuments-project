// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const left9ColumnImageRight3ColumnTextTemplate = document.createElement("template");
left9ColumnImageRight3ColumnTextTemplate.innerHTML = allStyles + `

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
      <div class="col-md-9 col-sm-12">
        <div id="1-headline"></div>
        <div id="1-subheadline"></div>
        <span id="1-img"></span>
      </div>

      <div class="col-md-3 col-sm-12">
        <div id="2-headline"></div>
        <div id="2-subheadline"></div>
        <div id="2-variable-text-slot"></div>
      </div>
  </div>

</div> 

`;

//initializing our class
class left9ColumnImageRight3ColumnText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, left9ColumnImageRight3ColumnTextTemplate);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-subheadline');
    createComponentFromSlot(this, '1-img');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createVariableComponents(this, '2-variable-text-slot');

  }
}
window.customElements.define('left-9-column-image-right-3-column-text', left9ColumnImageRight3ColumnText);