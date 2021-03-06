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

    <div id="container" class="">
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
    setupComponent(this, h3WithBottomMargin);

  }
}

window.customElements.define('h3-with-bottom-margin', H3WithBottomMargin);
