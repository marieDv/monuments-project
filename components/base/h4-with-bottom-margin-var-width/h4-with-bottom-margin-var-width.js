// H4 WITH BOTTOM MARGIN WAR WIDTH
// Attributes: title
// components nested: none

//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h4WithBottomMarginVarWidth = document.createElement("template");

// TEMPLATE FOR OUR COMPONENT
h4WithBottomMarginVarWidth.innerHTML = allStyles + `
<style>
#variable-column {
    margin-top: 36px;
    width: 100%;
}
#h4-with-bottom-margin-var-width {
    margin-bottom: 16px;
    font-size: 24px;
    text-transform: uppercase;
}
</style>

<div id="variable-column" class="">
            <h4 id="h4-with-bottom-margin-var-width">
            <slot name="title"></slot>
            </h4>
        </div>
    </div>
`;

class H4WithBottomMarginVarWidth extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, h4WithBottomMarginVarWidth);

    this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
  }
}

window.customElements.define('h4-with-bottom-margin-var-width', H4WithBottomMarginVarWidth);

