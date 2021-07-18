const PullQuoteTemplate = document.createElement('template');
PullQuoteTemplate.innerHTML = allStyles + `
<style>
#pull-quote {
  font-size: 32px;
  letter-spacing: 2%;
  line-height:32px;
  text-transform: uppercase;
  text-align: center;
}
</style>

<div id="variable-column" class="container-fluid d-flex justify-content-center">
    <slot id="pull-quote" name="text"></slot>
</div>
`;

class PullQuoteWithBottomMarginVarWidth extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, PullQuoteTemplate);
    this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
  }
}

window.customElements.define('pull-quote-with-bottom-margin-var-width', PullQuoteWithBottomMarginVarWidth);