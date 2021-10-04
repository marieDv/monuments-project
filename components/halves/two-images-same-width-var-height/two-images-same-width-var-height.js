//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const twoImgsSameWidthVarHeightTemplate = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
twoImgsSameWidthVarHeightTemplate.innerHTML = allStyles + `
<style>

p {
  margin-top: 16px;
  font-size:14px;
  line-height: 16px;
  margin-left: 16px;
}

#line {
  position: absolute;
  left: calc(50% - 0.5px);
  width: 1px;
  height: 100%;
  background-color: pink;
}

.yes {
  display:inline;
}

.no {
  display:none;
}
.applyBorder {
  border-left: 1px solid black;
}
.row {
  position: relative;
}
.caption-box {
  margin: 0;
  margin-top: 16px;

#container {
  background:pink;
  margin-top: 36px;
}


</style>

<div id="container" class="container-fluid">
  <div class="row">
    <div class="col-6">
    <span id='1-img'></span>
    </div>

    <!-- <div id="line"></div> -->

    <div id="border" class="col-6">
    <span id='2-img'></span>
    </div>
  </div>
</div>


`;

//initializing our class
class TwoImgsSameWidthVarHeight extends HTMLElement {
  constructor(){
    super();
    setupComponent(this, twoImgsSameWidthVarHeightTemplate);
    
    if(this.getAttribute("hasBorder") === "true"){
      this.shadowRoot.getElementById('border').classList.add('applyBorder');
  }

    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-img');

  }
}
window.customElements.define('two-images-same-width-var-height', TwoImgsSameWidthVarHeight);