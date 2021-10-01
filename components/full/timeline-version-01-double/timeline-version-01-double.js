

const fullTimelineVersion01DoubleTemplate = document.createElement("template");
fullTimelineVersion01DoubleTemplate.innerHTML = allStyles + `

<style>

.applyBorder {
  /*  border-right: 1px solid black;*/
}
.applyBorder-second {
 /* border-left: 1px solid black;
  border-right: none;*/
}
#timeline::after {
content:"";
position: absolute;
height: 100%;
width: 2px;
background: black;
}
#border-box {
  position: relative;
  height: auto;
  display: block;
}
#inside-border {
  position: absolute;
  width: 1px;
  height: 100%;
  background: black;
}
</style>

<div id="timeline" class="container-fluid">
<div class="row">

<div class="col-3 col-md-1">
  <div id="timestamp"></div>
</div>
<div class="col-3 col-md-2">
  <div id="img"></div>
</div>
<div class="col-3 col-md-3">
  <div id="variable-text-slot"></div>
</div>

<div id="border-box">
<span id="inside-border"></span>
</div>

<!--<div class=" applyBorder applyBorder-second"></div>-->
<div class="col-3 col-md-1">
  <div id="2-timestamp"></div>
</div>
<div class="col-3 col-md-2">
  <div id="2-img"></div>
</div>
<div class="col-3 col-md-3">
  <div id="2-variable-text-slot"></div>
</div>
</div>
</div>

`;

//initializing our class
class fullTimelineVersion01Double extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, fullTimelineVersion01DoubleTemplate);
    createComponentFromSlot(this,'timestamp');
    createComponentFromSlot(this,'img');
    createVariableComponents(this,'variable-text-slot');

    createComponentFromSlot(this,'2-timestamp');
    createComponentFromSlot(this,'2-img');
    createVariableComponents(this,'2-variable-text-slot');

    if(this.getAttribute("hasBorder") === "true"){
        this.shadowRoot.getElementById('border').classList.add('applyBorder');
    }
    console.log(this.getAttribute('component is nested'))
  }
}
window.customElements.define('full-timeline-version-01-double', fullTimelineVersion01Double);







 





