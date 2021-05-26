

const H3Headlines6ColumnImageBodyTextTemplate = document.createElement("template");
H3Headlines6ColumnImageBodyTextTemplate.innerHTML = allStyles + `

<style>

.applyBorder {
    border-right: 1px solid black;
}
</style>

<div class="container-fluid">
<div class='row'>
<div class='col-md-6' id='border'>
<span id='1-h3'></span>
<span id='img'></span>
</div>
<div class='col-md-6'>
<span id='2-h3'></span>
<span id='variable-text-slot'></span>
</div>
</div>
</div> 

`;

//initializing our class
class H3Headlines6ColumnImageBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, H3Headlines6ColumnImageBodyTextTemplate);
    createComponentFromSlot(this,'1-h3');
    createComponentFromSlot(this,'img');
    createComponentFromSlot(this,'2-h3');
    createVariableComponents(this,'variable-text-slot');

    if(this.getAttribute("hasBorder") === "true"){
        this.shadowRoot.getElementById('border').classList.add('applyBorder');


console.log("There is a border")
    }
    console.log(this.getAttribute('hasBorder'))
  }
}
window.customElements.define('halves-h3-headline-6column-image-body-text', H3Headlines6ColumnImageBodyText);







 





