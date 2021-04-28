// block-quote-with-left-and-bottom-margin-var-width

const BlockQuoteWithLeftAndBottomMarginVarWidthTemplate = document.createElement('template');
BlockQuoteWithLeftAndBottomMarginVarWidthTemplate.innerHTML = allStyles + `
<style>
#block-quote{
margin-bottom: 12px;
}
p {
  font-size: 14px;
  display: block;
  font-style: italic;
}
</style>
<div id="block-quote" class="container-fluid ">
<div class="row">

<div class="col-3"></div>
  <p class="col-8">
    <slot name="text"></slot>
  </p>
  </div>
</div>
`;

class BlockQuoteWithLeftAndBottomMarginVarWidth extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(BlockQuoteWithLeftAndBottomMarginVarWidthTemplate.content.cloneNode(true));
  }
}

window.customElements.define('block-quote-width-left-and-bottom-margin-var-width', BlockQuoteWithLeftAndBottomMarginVarWidth);