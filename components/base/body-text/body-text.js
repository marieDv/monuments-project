const bodyTextTemplate = document.createElement('template');
bodyTextTemplate.innerHTML = allStyles + `
<style>
#styleText {
  font-size: 16px;
  letter-spacing: 2%;
  line-height: 20px;
  background: pink;
}
</style>

<div id="variable-column" class="container-fluid d-flex justify-content-center">
    <slot id="styleText" name="text"></slot>
</div>
`;

class bodyText extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, bodyTextTemplate);
    this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
  }
}

window.customElements.define('body-text', bodyText);