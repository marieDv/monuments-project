

const FullTimelineVersion01Template = document.createElement("template");
FullTimelineVersion01Template.innerHTML = allStyles + `

<style>

.applyBorder {
    border-right: 1px solid black;
}
.applyBorder-second {
  border-left: 1px solid black;
  border-right: none;
}
</style>

<div class="container-fluid">
<div class="row">
<div class="col-1 col-md-1 applyBorder"></div>
<div class="col-3 col-md-1">
  <div id="timestamp"></div>
</div>
<div class="col-3 col-md-2">
  <div id="img"></div>
</div>
<div class="col-4 col-md-3">
  <div id="variable-text-slot"></div>
</div>



<div class="col-1 col-md-1 applyBorder applyBorder-second"></div>
<div class="col-3 col-md-1">
  <div id="timestamp"></div>
</div>
<div class="col-3 col-md-2">
  <div id="img"></div>
</div>
<div class="col-4 col-md-3">
  <div id="variable-text-slot"></div>
</div>
</div>
</div>

`;

//initializing our class
class FullTimelineVersion01 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, FullTimelineVersion01Template);
    createComponentFromSlot(this,'timestamp');
    createComponentFromSlot(this,'img');
    createVariableComponents(this,'variable-text-slot');

    if(this.getAttribute("hasBorder") === "true"){
        this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
    console.log(this.getAttribute('component is nested'))
  }
}
window.customElements.define('full-timeline-version-01', FullTimelineVersion01);







 





