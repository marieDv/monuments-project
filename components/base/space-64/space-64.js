const Space64Template = document.createElement('template');
Space64Template.innerHTML = allStyles + `
<style>
#mySpace {
  width: 100%;
  height: 64px;
}
#mySpace.applyBorder::after {
  content:"";
  position: absolute;
  width: 1px;
  margin: 0 auto;
  left: 0;
  right: 0;
  height: 64px;
  background: black;
}

</style>
<div id="mySpace">
</div>
`;

class Space64 extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Space64Template);
    if (this.getAttribute("hasBorder") === "true") {
      this.shadowRoot.getElementById('mySpace').classList.add('applyBorder');
    }
  }
}

window.customElements.define('space-64', Space64);