const Space120Template = document.createElement('template');
Space120Template.innerHTML = allStyles + `
<style>
#mySpace {
width: 100%;
height: 120px;
}
</style>
<div id="mySpace">

</div>

`;

class Space120 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Space120Template);
  }
}

window.customElements.define('space-120', Space120);