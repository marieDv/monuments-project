const pullquotewithbottommarginvarwidth = document.createElement('template');
pullquotewithbottommarginvarwidth.innerHTML = allStyles + `
<style>
p.pullquotewithbottommarginvarwidth {
  font-size: 32px;
  letter-spacing: 2%;
  line-height: 32px;

  text-align: center;
  font-weight: regular;
  
  margin-bottom: 16px;
  text-transform: uppercase;
}
</style>

<div id="variable-column" class="container d-flex justify-content-center">
    <p class="pullquotewithbottommarginvarwidth"> </p>
</div>
`;

class PullQuoteWithBottomMarginVarWidth extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, pullquotewithbottommarginvarwidth);

    this.shadowRoot.querySelector('p.pullquotewithbottommarginvarwidth').innerHTML = this.getAttribute('pull-quote');
    this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
  }
}

window.customElements.define('pull-quote-with-bottom-margin-var-width', PullQuoteWithBottomMarginVarWidth);