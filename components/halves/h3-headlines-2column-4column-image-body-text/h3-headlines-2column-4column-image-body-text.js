

const H3Headlines2Column4ColumnImageBodyTextTemplate = document.createElement("template");
H3Headlines2Column4ColumnImageBodyTextTemplate.innerHTML = allStyles + `

<style>

.applyBorder {
    border-right: 1px solid black;
}
</style>

<div class="container-fluid">
    <div class='row'>
        <div class='col-md-6' id='border'>
        <span id='1-h3'></span>

<div class="container">
    <div class='row'>
    <div class='col-md-4' id='border'>
        <span id='img'></span>
    </div>
    <div class='col-md-8' id='border'>

        <span id='2-img'></span>
</div>
    </div>
    </div>
</div>
<div class='col-md-6'>
<span id='2-h3'></span>
<span id='variable-text-slot'></span>
</div>
</div>
</div> 

`;

//initializing our class
class H3Headlines2Column4ColumnImageBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, H3Headlines2Column4ColumnImageBodyTextTemplate);
    createComponentFromSlot(this,'1-h3');
    createComponentFromSlot(this,'img');
    createComponentFromSlot(this,'2-h3');
    createComponentFromSlot(this,'2-img');
    createVariableComponents(this,'variable-text-slot');
    if(this.getAttribute("hasBorder") === "true"){
        this.shadowRoot.getElementById('border').classList.add('applyBorder');


console.log("There is a border")
    }
    console.log(this.getAttribute('hasBorder'))
  }
}
window.customElements.define('halves-h3-headlines-2column-4column-image-body-text', H3Headlines2Column4ColumnImageBodyText);







 





