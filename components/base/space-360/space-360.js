const Space360Template = document.createElement('template');
Space360Template.innerHTML = allStyles + `
<style>
#mySpace {
width: 100%;
height: 360px;
}
</style>
<div id="mySpace">

</div>

`;

class Space360 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Space360Template);
  }
}

window.customElements.define('space-360', Space360);