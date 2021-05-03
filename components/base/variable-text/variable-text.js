const VariableTextTemplate = document.createElement('template');
VariableTextTemplate.innerHTML = allStyles + `
<style>
span {
  display: block;
}

</style>

<div class="container-fluid">
<div id="variable-text-base" class="col-5">
</div>
<div class="col-1"></div>
</div> 
`;

var slotsForTemplate = "";

class VariableText extends HTMLElement {


  constructor() {
    super();
    setupComponent(this, VariableTextTemplate);
    createVariableText(this, 'variable-text-base');
    this.shadowRoot.getElementById('variable-text-base').classList.add(this.getAttribute("colWidth"));

  }
}

window.customElements.define('variable-text', VariableText);
