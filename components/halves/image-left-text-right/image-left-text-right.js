// IMAGE LEFT TEXT RIGHT
// Attributes: altImg, imgPath, caption
// components nested: variable text slots


const imageLeftTextRight = document.createElement("template");
imageLeftTextRight.innerHTML = allStyles + `

<style>
img {
    width: 100%;
    height: auto;
} 

p {
  margin-top: 16px;
  font-size: 14px;
  line-height: 16px;
}

#container {
  margin-top: 36px;
}

</style>

<div class="container-fluid">
  <span id="headline"></span>
  <div class="row">
    


    <span id="h3-with-bottom-margin"></span>
    <div class="col-md-6 col-sm-12" id="img"></div>
    <div class="col-1"></div>
    <div id="variable-text-slot" class="col-md-5 col-sm-12"></div>
  </div>
</div> 

`;

//initializing our class
class halvesImageLeftTextRight extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, imageLeftTextRight);

    createComponentFromSlot(this, 'headline');
    createComponentFromSlot(this, 'img');
    createVariableComponents(this, 'variable-text-slot');
  }
}
window.customElements.define('halves-image-left-text-right', halvesImageLeftTextRight);














