//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h3WithBottomMargin = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
h3WithBottomMargin.innerHTML = allStyles + `
<style>

#container {
    margin-top: 36px;
}
#h3 {
    color: black;
    margin-bottom: 28px;
}

</style>

    <div id="container" class="d-flex justify-content-center">
            <h3 id="h3-with-bottom-margin" class="">
            <slot name="title"></slot>
            </h3>
        </div>
    </div>

`;

//initializing our class
class H3WithBottomMargin extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(h3WithBottomMargin.content.cloneNode(true));//attach template
  }
}

window.customElements.define('h3-with-bottom-margin', H3WithBottomMargin);
