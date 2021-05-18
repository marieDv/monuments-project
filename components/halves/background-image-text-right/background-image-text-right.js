const backgroundImageTextRightTemplate = document.createElement("template");
backgroundImageTextRightTemplate.innerHTML = allStyles + `

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

.background-with-overlay {
  position: relative;
  padding: 0;
}

.background-with-overlay > .overlay-of-background-with-overlay {
  position: absolute;
  top: 0;
  left: 50%;
}

.overlay-of-background-with-overlay {
  padding-left: 40px;
}


</style>


  <div class="container-fluid background-with-overlay">
    <div id="img"></div>

    <div class="overlay-of-background-with-overlay">
      <span id="headline"></span>

      <div class="row">
        <div id="variable-text-slot" class="col-md-6 col-sm-12">
      </div>
    </div>
  </div> 
  


`;

//initializing our class
class halvesBackgroundImageTextRight extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, backgroundImageTextRightTemplate);

    createComponentFromSlot(this, 'headline');
    createComponentFromSlot(this, 'img');
    createVariableComponents(this, 'variable-text-slot');
  }
}
window.customElements.define('halves-background-image-text-right', halvesBackgroundImageTextRight);














