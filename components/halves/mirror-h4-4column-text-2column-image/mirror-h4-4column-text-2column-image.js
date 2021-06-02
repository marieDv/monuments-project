// IMAGE LEFT TEXT RIGHT
// Attributes: altImg, imgPath, caption
// components nested: variable text slots


const mirrorH44columnText2columnImage = document.createElement("template");
mirrorH44columnText2columnImage.innerHTML = allStyles + `

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
    <div class="col-md-4 col-sm-12">
      <div id="headline1"></div>
      <div id="variable-text-slot1"></div>
    </div>
    <div class="col-md-2 col-sm-12">
      <div id="img1"></div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div id="headline2"></div>
      <div id="variable-text-slot2"></div>
    </div>
    <div class="col-md-2 col-sm-12">
      <div id="img2"></div>
    </div>
  <div>
</div> 

`;

//initializing our class
class halvesMirrorH44columnText2columnImage extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, mirrorH44columnText2columnImage);

    createComponentFromSlot(this, 'headline1');
    createComponentFromSlot(this, 'img1');
    createVariableComponents(this, 'variable-text-slot1');
    createComponentFromSlot(this, 'headline2');
    createComponentFromSlot(this, 'img2');
    createVariableComponents(this, 'variable-text-slot2');
  }
}
window.customElements.define('halves-mirror-h4-4column-text-2column-image', halvesMirrorH44columnText2columnImage);














