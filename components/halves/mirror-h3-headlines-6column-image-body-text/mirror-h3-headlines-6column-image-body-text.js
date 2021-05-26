const MirrorH3Headlines6ColumnImageBodyTextTemplate = document.createElement("template");
MirrorH3Headlines6ColumnImageBodyTextTemplate.innerHTML = allStyles + `

<style>
#border {
  
}
.applyBorder {
  border-right: 1px solid #000000;
}
</style>

<div class="container-fluid">
<div class="row">
<div id="border" class="col-md-6">
  <span id="2-h3"></span>
<span id="variable-text-slot"></span>
</div>
  <div class="col-md-6">
    <span id="1-h3"></span>
    <span id="img"></span>
  </div>
</div>
</div> 

`;

//initializing our class
class MirrorH3Headlines6ColumnImageBodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, MirrorH3Headlines6ColumnImageBodyTextTemplate);
    createComponentFromSlot(this, '1-h3');
    createComponentFromSlot(this, 'img');
    createComponentFromSlot(this, '2-h3');
    createVariableComponents(this, 'variable-text-slot');

    if (this.getAttribute('hasBorder') === "true") {
      this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
  }
}
window.customElements.define('halves-mirror-h3-headline-6column-image-body-text', MirrorH3Headlines6ColumnImageBodyText);














