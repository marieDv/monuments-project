//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const twoImgsSameWidthVarHeight = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
twoImgsSameWidthVarHeight.innerHTML = allStyles + `
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

#line {
  position: absolute;
  left: calc(50% - 0.5px);
  width: 1px;
  height: 100%;
  background-color: black;
}

.yes {
  display:inline;
}

.no {
  display:none;
}

.row {
  position: relative;
}

#container {
  margin-top: 36px;
}


</style>

<div id="container" class="container-fluid">
  <div class="row">
    <div class="col-6">
      <img id="imgOne" src="" alt="">
      <p class="col-4">
      <slot name="CaptionOne"></slot>
      </p>
    </div>

    <div id="line"></div>

    <div class="col-6">
      <img id="imgTwo" src="" alt="">
      <p class="col-4">
      <slot name="CaptionTwo"></slot>
      </p>
    </div>
  </div>
</div>

<p>

</p>

`;

//initializing our class
class TwoImgsSameWidthVarHeight extends HTMLElement {
  constructor(){
    super();

    //initialize the shadow dom
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    //add bootstrap-stylesheet
    this.shadowRoot.innerHTML += `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>`;
    this.shadowRoot.appendChild(twoImgsSameWidthVarHeight.content.cloneNode(true));//attach template

    //access the img element inside our template
    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('ImgPathOne');
    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('AltImgOne');
    //access the img element inside our template
    this.shadowRoot.querySelector('#imgTwo').src = this.getAttribute('ImgPathTwo');
    this.shadowRoot.querySelector('#imgTwo').alt = this.getAttribute('AltImgTwo');

    //LINE OR NO LINE? 
    this.shadowRoot.getElementById('line').classList.add(this.getAttribute("Line?"));
  
    //VARIABLE WITH CODE  

  }
}
window.customElements.define('two-images-same-width-var-height', TwoImgsSameWidthVarHeight);