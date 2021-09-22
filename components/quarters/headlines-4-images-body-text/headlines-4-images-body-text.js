// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const headlines4ImagesBodyTextTemplate = document.createElement("template");
headlines4ImagesBodyTextTemplate.innerHTML = allStyles + `

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
.headline {
  display: inline;
}
.subheadline {
  display: inline;
}
</style>

<div class="container-fluid">
<div class="row">

<div class="col-md-3 col-sm-12">
  <span id="1-headline" class="headline"></span>
  <span id="1-subheadline" class="subheadline"></span>
  <span id="h3-with-bottom-margin"></span>
  <div id="1-img"></div>
  <div id="1-variable-text-slot"></div>
</div>

<div class="col-md-3 col-sm-12">
  <div id="2-headline" class="headline"></div>
  <div id="2-subheadline" class="subheadline"></div>
  <span id="h3-with-bottom-margin"></span>
  <div id="2-img"></div>
  <div id="2-variable-text-slot"></div>
</div>

<div class="col-md-3 col-sm-12">
  <div id="3-headline" class="headline"></div>
  <div id="3-subheadline" class="subheadline"></div>
  <span id="h3-with-bottom-margin"></span>
  <div id="3-img"></div>
  <div id="3-variable-text-slot"></div>
</div>

<div class="col-md-3 col-sm-12">
  <div id="4-headline" class="headline"></div>
  <div id="4-subheadline" class="subheadline"></div>
  <span id="h3-with-bottom-margin"></span>
  <div id="4-img"></div>
  <div id="4-variable-text-slot"></div>
</div>

</div>
</div>
</div> 

`;

//initializing our class
class headlines4ImagesBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, headlines4ImagesBodyTextTemplate);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-subheadline');
    createComponentFromSlot(this, '1-img');
    createVariableComponents(this, '1-variable-text-slot');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createComponentFromSlot(this, '2-img');
    createVariableComponents(this, '2-variable-text-slot');

    createComponentFromSlot(this, '3-headline');
    createComponentFromSlot(this, '3-subheadline');
    createComponentFromSlot(this, '3-img');
    createVariableComponents(this, '3-variable-text-slot');

    createComponentFromSlot(this, '4-headline');
    createComponentFromSlot(this, '4-subheadline');
    createComponentFromSlot(this, '4-img');
    createVariableComponents(this, '4-variable-text-slot');
  }
}
window.customElements.define('quarters-headlines-4-images-body-text', headlines4ImagesBodyText);














