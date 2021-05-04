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
    createFreeComponents(this, '1-freeText');

    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-subheadline');
    createComponentFromSlot(this, '2-img');
    createFreeComponents(this, '2-freeText');

    createComponentFromSlot(this, '3-headline');
    createComponentFromSlot(this, '3-subheadline');
    createComponentFromSlot(this, '3-img');
    createFreeComponents(this, '3-freeText');

    createComponentFromSlot(this, '4-headline');
    createComponentFromSlot(this, '4-subheadline');
    createComponentFromSlot(this, '4-img');
    createFreeComponents(this, '4-freeText');
  }
}
window.customElements.define('headlines-4-images-body-text', headlines4ImagesBodyText);














