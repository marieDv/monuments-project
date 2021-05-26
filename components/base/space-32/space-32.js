const Space32Template = document.createElement('template');
Space32Template.innerHTML = allStyles + `
<style>
#mySpace {
width: 100%;
height: 32px;
}
</style>
<div id="mySpace">

</div>

`;

class Space32 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Space32Template);
  }
}

window.customElements.define('space-32', Space32);