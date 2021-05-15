// IMAGE LEFT 2 COLUMNS TEXT
// Attributes: 


const ImagesLeftTwoColumnsTextTemplate = document.createElement("template");
ImagesLeftTwoColumnsTextTemplate.innerHTML = allStyles + `

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

#container-fluid {
margin-top: 36px;
}

</style>

<div class="container-fluid">

  <div class="row">

    <div class="col-md-4 col-sm-12">
      <div id="1-img"></div>
      <div id="2-img"></div>
      <div id="3-img"></div>
    </div>

    <div class="col-md-4 col-sm-12">
      <span id="variable-text-slot"></span>
    </div>

    <div class="col-md-4 col-sm-12">
      <span id="variable-text-slot-2"></span>
    </div>
    
  </div>

</div> 
`;

//initializing our class
class ImagesLeft2ColumnsText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, ImagesLeftTwoColumnsTextTemplate);

    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-img');
    createComponentFromSlot(this, '3-img');
    createVariableComponents(this, 'variable-text-slot');
    createVariableComponents(this, 'variable-text-slot-2');


  }
}
window.customElements.define('thirds-images-left-2-columns-text', ImagesLeft2ColumnsText);














