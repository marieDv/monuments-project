// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const right9ColumnImageLeft3ColumnTextTemplate = document.createElement("template");
right9ColumnImageLeft3ColumnTextTemplate.innerHTML = allStyles + `

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
        <div id="1-headline"></div>
        <div id="1-subheadline"></div>
        <div id="1-variable-text-slot"></div>
      </div>
      <div class="col-md-9 col-sm-12">
        <div id="2-headline"></div>
        <div id="2-subheadline"></div>
        <span id="1-img"></span>
      </div>
  </div>

</div> 

`;

//initializing our class
class right9ColumnImageLeft3ColumnText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, right9ColumnImageLeft3ColumnTextTemplate);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-subheadline');
    createVariableComponents(this, '1-variable-text-slot');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createComponentFromSlot(this, '1-img');


  }
}
window.customElements.define('rigth-9-column-image-left-3-column-text', right9ColumnImageLeft3ColumnText);