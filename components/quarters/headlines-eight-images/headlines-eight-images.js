// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const headlines8ImagesTemplate = document.createElement("template");
headlines8ImagesTemplate.innerHTML = allStyles + `

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
      <span id="h3-with-bottom-margin"></span>
      <div id="1-img"></div>
      <div id="1-freeText"></div>
    </div>

    <div class="col-md-3 col-sm-12">
      <div id="2-headline"></div>
      <div id="2-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="2-img"></div>
      <div id="2-freeText"></div>
    </div>

    <div class="col-md-3 col-sm-12">
      <div id="3-headline"></div>
      <div id="3-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="3-img"></div>
      <div id="3-freeText"></div>
    </div>

    <div class="col-md-3 col-sm-12">
      <div id="4-headline"></div>
      <div id="4-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="4-img"></div>
      <div id="4-freeText"></div>
    </div>

  </div>

  <!-- BOTTOM ROW -->

  <div class="row">

    <div class="col-md-3 col-sm-12">
      <div id="5-headline"></div>
      <div id="5-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="5-img"></div>
      <div id="5-freeText"></div>
    </div>

    <div class="col-md-3 col-sm-12">
      <div id="6-headline"></div>
      <div id="6-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="6-img"></div>
      <div id="6-freeText"></div>
    </div>

    <div class="col-md-3 col-sm-12">
      <div id="7-headline"></div>
      <div id="7-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="7-img"></div>
      <div id="7-freeText"></div>
    </div>

    <div class="col-md-3 col-sm-12">
      <div id="8-headline"></div>
      <div id="8-subheadline"></div>
      <span id="h3-with-bottom-margin"></span>
      <div id="8-img"></div>
      <div id="8-freeText"></div>
    </div>

  </div>

</div> 

`;

//initializing our class
class headlines8Images extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, headlines8ImagesTemplate);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-subheadline');
    createComponentFromSlot(this, '1-img');
    //createVariableComponents(this, '1-freeText');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createComponentFromSlot(this, '2-img');
    //createVariableComponents(this, '2-freeText');

    createComponentFromSlot(this, '3-headline');
    createComponentFromSlot(this, '3-subheadline');
    createComponentFromSlot(this, '3-img');
    //createVariableComponents(this, '3-freeText');

    createComponentFromSlot(this, '4-headline');
    createComponentFromSlot(this, '4-subheadline');
    createComponentFromSlot(this, '4-img');
    //createVariableComponents(this, '4-freeText');

    // BOTTOM ROW

    //createComponentFromSlot(this, '5-headline');
    //createComponentFromSlot(this, '5-subheadline');
    createComponentFromSlot(this, '5-img');
    //createVariableComponents(this, '5-freeText');

    //createComponentFromSlot(this, '6-headline');
    //createComponentFromSlot(this, '6-subheadline');
    createComponentFromSlot(this, '6-img');
    //createVariableComponents(this, '6-freeText');

    //createComponentFromSlot(this, '7-headline');
    //createComponentFromSlot(this, '7-subheadline');
    createComponentFromSlot(this, '7-img');
    //createVariableComponents(this, '7-freeText');

    //createComponentFromSlot(this, '8-headline');
    //createComponentFromSlot(this, '8-subheadline');
    createComponentFromSlot(this, '8-img');
    //createVariableComponents(this, '8-freeText');


  }
}
window.customElements.define('quarters-headlines-eight-images', headlines8Images);














