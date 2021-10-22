//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h2SectionTitle = document.createElement("template");

// TEMPLATE FOR OUR COMPONENT
h2SectionTitle.innerHTML = allStyles + `
<style>

#container {
    margin-top: 64px;
    margin-bottom: 64px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
    
}
#h2-section-tile {
    color: black;
    font-size: 54px;

}

@media only screen and (max-width: 720px){
    #h2-section-tile {

            font-size: 32px;
        }
}

</style>
      <div id="container" class="col-md-8 col-sm-12">
              <h2 id="h2-section-tile">
              <slot name="title"></slot>
              </h2>
      </div>
`;

class H2SectionTitle extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, h2SectionTitle);
  }
}

window.customElements.define('h2-section-title', H2SectionTitle);
