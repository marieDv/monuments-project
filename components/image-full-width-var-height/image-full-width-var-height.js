//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const imgFullWidthVarHeight = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
imgFullWidthVarHeight.innerHTML = allStyles + `
<style>
img {
    width: 100%;
    height: auto;
} 

p {
  margin-top: 16px;
  font-size:14px;
  line-height: 16px;
  margin-left: 16px;
}

.container-fluid {
  padding: 0px;
  background-color: red;
}

</style>

<div class="container-fluid p-0">
<div class="row">
    <img id="imgOne" src="" alt="">
    <p class="col-4" id="captionOne"></p>
</div>
</div>
`;

//initializing our class
class ImgFullWidthVarHeight extends HTMLElement {
  constructor(){
    super();

    //initialize the shadow dom
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    //add bootstrap-stylesheet
    this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    this.shadowRoot.appendChild(imgFullWidthVarHeight.content.cloneNode(true));//attach template

    //access the h1 element inside our template
    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('ImgPath');
    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('AltImg');
    this.shadowRoot.querySelector('#captionOne').innerText = this.getAttribute('Caption');
    
    //VARIABLE WITH CODE  this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));

  }
}
window.customElements.define('img-full-width-var-height', ImgFullWidthVarHeight);