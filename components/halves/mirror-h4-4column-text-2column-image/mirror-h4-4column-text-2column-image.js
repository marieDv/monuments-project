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
/*#border {
  position: absolute;
  width: 1px;
  height: 200px;
  margin: 0 auto;
  right: 0;
  left: -1px;
}*/
.applyBorder {
  border-left: 1px solid black;
  border-right: none;
}
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-4 col-sm-12">
      <div id="1-headline"></div>
      <div id="1-variable-text-slot"></div>
    </div>
    <div class="col-md-2 col-sm-12">
      <div id="1-img"></div>
    </div>

    <div id="border" class="col-md-4 col-sm-12">
      <div id="2-headline"></div>
      <div id="2-variable-text-slot"></div>
    </div>
    <div class="col-md-2 col-sm-12">
      <div id="2-img"></div>
    </div>
  <div>
</div> 

`;

//initializing our class
class halvesMirrorH44columnText2columnImage extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, mirrorH44columnText2columnImage);

    createComponentFromSlot(this, '1-headline');
    createComponentFromSlot(this, '1-img');
    createVariableComponents(this, '1-variable-text-slot');
    createComponentFromSlot(this, '2-headline');
    createComponentFromSlot(this, '2-img');
    createVariableComponents(this, '2-variable-text-slot');

    if (this.getAttribute('hasBorder') === "true") {
      this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
  }
}
window.customElements.define('halves-mirror-h4-4column-text-2column-image', halvesMirrorH44columnText2columnImage);














