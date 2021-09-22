

const FullTimelineVersion02Template = document.createElement("template");
FullTimelineVersion02Template.innerHTML = allStyles + `

<style>

.applyBorder {
    border-right: 1px solid black;
}
</style>

<div class="container-fluid">
<div class="row">
  <div class="col-1 col-md-1 applyBorder"></div>
  <div class="col-3 col-md-2">
    <div id="timestamp"></div>
  </div>
  <div class="col-4 col-md-4">
  <div id="variable-text-slot"></div>
</div>
  <div class="col-3 col-md-4">
    <div id="img"></div>
  </div>

</div>
</div> 

`;

//initializing our class
class FullTimelineVersion02 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, FullTimelineVersion02Template);
    createComponentFromSlot(this,'timestamp');
    createComponentFromSlot(this,'img');
    createVariableComponents(this,'variable-text-slot');

    if(this.getAttribute("hasBorder") === "true"){
        this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
    console.log(this.getAttribute('component is nested'))
  }
}
window.customElements.define('full-timeline-version-02', FullTimelineVersion02);







 





