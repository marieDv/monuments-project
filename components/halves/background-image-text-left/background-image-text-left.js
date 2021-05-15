const backgroundImageTextLeftTemplate = document.createElement("template");
backgroundImageTextLeftTemplate.innerHTML = allStyles + `

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
<div class="col-md-12 col-sm-12">
<span id="img"></span>
<span id="headline"></span>
<div class="row">
<div id="variable-text-slot" class="col-md-6 col-sm-12">
</div>

<div class="col-1"></div>
<span id="h3-with-bottom-margin"></span>
<div class="col-md-6 col-sm-12" id="img"></div>
</div>
</div> 

`;

//initializing our class
class halvesBackgroundImageTextLeft extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, backgroundImageTextLeftTemplate);

    createComponentFromSlot(this, 'headline');
    createComponentFromSlot(this, 'img');
    createVariableComponents(this, 'variable-text-slot');
  }
}
window.customElements.define('halves-background-image-text-left', halvesBackgroundImageTextLeft);














