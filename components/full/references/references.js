const ReferencesTemplate = document.createElement('template');
ReferencesTemplate.innerHTML = allStyles + `
<style>
span {
  display: block;
}
.container {
  max-width: inherit;
  padding: 40px 16px;
}
.text-block {
  font-size: 12px;
    line-height: 14px;
    font-weight: 600;
}
#headline {
  text-indent: 40px;
}
</style>

<div class="container container-fluid">
<div id="headline"></div>
<div class="row">
<div class="text-block col-2"><slot name="3-text"></slot></div>
<div class="text-block col-2"><slot name="1-text"></slot></div>
<div class="text-block col-2"><slot name="2-text"></slot></div>
<div class="text-block col-2"><slot name="4-text"></slot></div>
<div class="text-block col-2"><slot name="5-text"></slot></div>
<div class="text-block col-2"><slot name="6-text"></slot></div>
</div>
</div> 
`;

var slotsForTemplate = "";

class References extends HTMLElement {


  constructor() {
    super();
    
    setupComponent(this, ReferencesTemplate);
    createComponentFromSlot(this,'headline');
    // createVariableText(this, 'variable-text-base');
    // this.shadowRoot.getElementById('variable-text-base').classList.add(this.getAttribute("colWidth"));

  }
}

window.customElements.define('full-references', References);
