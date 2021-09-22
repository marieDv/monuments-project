// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const left6ColumnTextRight3ColumnImagesTextTemplate = document.createElement("template");
left6ColumnTextRight3ColumnImagesTextTemplate.innerHTML = allStyles + `

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

      <div class="col-md-6 col-sm-12">
        <div id="1-headline"></div>
        <div id="1-subheadline"></div>
        <div id="1-variable-text-slot"></div>
      </div>

      <div class="col-md-3 col-sm-12">
        <div id="2-headline"></div>
        <div id="2-subheadline"></div>
        <span id="1-img"></span>
        <div id="2-variable-text-slot"></div>
      </div>

      <div class="col-md-3 col-sm-12">
        <div id="3-headline"></div>
        <div id="3-subheadline"></div>
        <div id="3-variable-text-slot"></div>
        <span id="2-img"></span>
      </div>
 

  </div>

</div> 

`;

//initializing our class
class left6ColumnTextRight3ColumnImagesText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, left6ColumnTextRight3ColumnImagesTextTemplate);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-subheadline');
    createVariableComponents(this, '1-variable-text-slot');
    //createVariableComponents(this, '1-freeText');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createComponentFromSlot(this, '1-img');
    createVariableComponents(this, '2-variable-text-slot');
    //createVariableComponents(this, '2-freeText');

    createComponentFromSlot(this, '3-headline');
    createComponentFromSlot(this, '3-subheadline');
    createVariableComponents(this, '3-variable-text-slot');
    createComponentFromSlot(this, '2-img');
    // createComponentFromSlot(this, 'a-button');
    //createVariableComponents(this, '3-freeText');

  }
}
window.customElements.define('quarter-left-6-column-text-right-3-column-images-text', left6ColumnTextRight3ColumnImagesText);