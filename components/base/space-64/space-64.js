const Space64Template = document.createElement('template');
Space64Template.innerHTML = allStyles + `
<style>
#mySpace {
  width: 100%;
  height: 64px;
}
</style>
<div id="mySpace">
</div>
`;

class Space64 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Space64Template);
  }
}

window.customElements.define('space-64', Space64);