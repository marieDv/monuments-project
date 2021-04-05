//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h2WithBottomMargin = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
h2WithBottomMargin.innerHTML = allStyles + `
<style>

#container {
    top: 200px;

}
#h2-with-bottom-margin {
    color: black;
    margin-bottom: 64px;
}

</style>
    <div id="container" class="d-flex justify-content-center">
            <h2 id="h2-with-bottom-margin" class="col-3"></h2>
        </div>
    </div>
`;

//initializing our class
class H2WithBottomMargin extends HTMLElement {
  constructor() {
    super();
    //initialize the shadow dom 
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    //add bootstrap-stylesheet
  
  //  this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    this.shadowRoot.appendChild(h2WithBottomMargin.content.cloneNode(true));//attach template
    this.shadowRoot.querySelector('#h2-with-bottom-margin').innerText = this.getAttribute("text");


    
  }
}

window.customElements.define('h2-with-bottom-margin', H2WithBottomMargin);
