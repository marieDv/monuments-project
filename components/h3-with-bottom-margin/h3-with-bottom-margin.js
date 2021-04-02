//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const h3WithBottomMargin = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
h3WithBottomMargin.innerHTML = `
<style>

#container {
    top: 200px;

}
#h3-with-bottom-margin {
    color: black;
    margin-bottom: 28px;
}

</style>

    <div id="container" class="d-flex justify-content-center">
            <h3 id="h3-with-bottom-margin" class="col-3"></h3>
        </div>
    </div>

`;

//initializing our class
class H3WithBottomMargin extends HTMLElement {
  constructor() {
    super();
    //initialize the shadow dom 
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    //add bootstrap-stylesheet
  
  //  this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    this.shadowRoot.appendChild(h3WithBottomMargin.content.cloneNode(true));//attach template
    this.shadowRoot.querySelector('#h3-with-bottom-margin').innerText = this.getAttribute("text");


    
  }
}

window.customElements.define('h3-with-bottom-margin', H3WithBottomMargin);
