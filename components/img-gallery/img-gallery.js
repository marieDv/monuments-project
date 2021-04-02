//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const imgGallery = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
imgGallery.innerHTML = `
<style>
img {
  width: 100%;
  border: 2px solid red;
  height: auto;
} 
</style>
<div class="container-fluid">
<div class="row">
<img class="col-4" id="imgOne" src="" alt="">
<img id="imgTwo" src="" alt="" class="col-4">
<img id="imgThree" src="" alt="" class="col-4">
</div>
</div>
`;

//initializing our class
class ImgGallery extends HTMLElement {
  constructor(){
    super();

    //initialize the shadow dom
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    //add bootstrap-stylesheet
    this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    this.shadowRoot.appendChild(imgGallery.content.cloneNode(true));//attach template

    //access the h1 element inside our template
    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('imgPathOne');
    this.shadowRoot.querySelector('#imgTwo').src = this.getAttribute('imgPathTwo');
    this.shadowRoot.querySelector('#imgThree').src = this.getAttribute('imgPathThree');

    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('altImgOne');
    this.shadowRoot.querySelector('#imgTwo').alt = this.getAttribute('altImgTwo');
    this.shadowRoot.querySelector('#imgThree').alt = this.getAttribute('altImgThree');
  }
}
window.customElements.define('img-gallery', ImgGallery);