// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const right6ColumnImageLeft3ColumnTextsTemplate = document.createElement("template");
right6ColumnImageLeft3ColumnTextsTemplate.innerHTML = allStyles + `

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

      <div class="col-md-3 col-sm-12">
        <div id="2-headline"></div>
        <div id="2-subheadline"></div>
        <div id="2-variable-text-slot"></div>
      </div>

      <div class="col-md-6 col-sm-12">
        <div id="3-headline"></div>
        <div id="3-subheadline"></div>
        <span id="1-img"></span>
      </div>
 

  </div>

</div> 

`;

//initializing our class
class right6ColumnImageLeft3ColumnTexts extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, right6ColumnImageLeft3ColumnTextsTemplate);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-subheadline');
    createVariableComponents(this, '1-variable-text-slot');
    //createVariableComponents(this, '1-freeText');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createVariableComponents(this, '2-variable-text-slot');
    //createVariableComponents(this, '2-freeText');

    createComponentFromSlot(this, '3-headline');
    createComponentFromSlot(this, '3-subheadline');
    createComponentFromSlot(this, '1-img');
    //createVariableComponents(this, '3-freeText');

  }
}
window.customElements.define('quarter-right-6-column-left-3-column-texts', right6ColumnImageLeft3ColumnTexts);