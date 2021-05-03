//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h2WithBottomMargin = document.createElement("template");

// TEMPLATE FOR OUR COMPONENT
h2WithBottomMargin.innerHTML = allStyles + `
<style>

#container {
    margin-top: 36px;
    text-align: center;
    width: 100%;
}
#h2-with-bottom-margin {
    color: black;
    margin-bottom: 64px;
    font-size: 54px;
}


</style>
    <div id="container" class="">
            <h2 id="h2-with-bottom-margin">
            <slot name="title"></slot>
            </h2>
        </div>
    </div>
`;

class H2WithBottomMargin extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, h2WithBottomMargin);
  }
}

window.customElements.define('h2-with-bottom-margin', H2WithBottomMargin);
