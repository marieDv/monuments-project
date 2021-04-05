//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h2WithBottomMargin = document.createElement("template");

// TEMPLATE FOR OUR COMPONENT
h2WithBottomMargin.innerHTML = allStyles + `
<style>

#container {
    margin-top: 36px;
}
#h2-with-bottom-margin {
    color: black;
    margin-bottom: 64px;
}


</style>
    <div id="container" class="d-flex justify-content-center">
            <h2 id="h2-with-bottom-margin">
            <slot name="title"></slot>
            </h2>
        </div>
    </div>
`;

class H2WithBottomMargin extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    this.shadowRoot.appendChild(h2WithBottomMargin.content.cloneNode(true));//attach template
  }
}

window.customElements.define('h2-with-bottom-margin', H2WithBottomMargin);
