

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
<span id='1-headline'></span>
<span id='img'></span>
</div>
<div class='col-md-6'>
<span id='2-headline'></span>
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
    createComponentFromSlot(this,'1-headline');
    createComponentFromSlot(this,'img');
    createComponentFromSlot(this,'2-headline');
    createVariableComponents(this,'variable-text-slot');

    if(this.getAttribute("hasBorder") === "true"){
        this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
  }
}
window.customElements.define('halves-h3-headline-6column-image-body-text', H3Headlines6ColumnImageBodyText);







 





