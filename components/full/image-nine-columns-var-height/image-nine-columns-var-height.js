//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const imgNineColumnsVarHeight = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
imgNineColumnsVarHeight.innerHTML = allStyles + `

<style>
img {
    width: 100%;
    height: auto;
} 

p {
  // margin-top: 16px;
  font-size:14px;
  line-height: 16px;
}

#container {
  margin-top: 36px;
}

</style>

<div id="container" class="container_fluid p-0">
    <img class="col-md-9  col-sm-12" id="imgOne" src="" alt="">
    <p class="col-md-9  col-sm-12 caption">
    <slot name="caption"/>
    </p>

</div>

`;

//initializing our class
class ImgNineColumnsVarHeight extends HTMLElement {
  constructor(){
    super();
    setupComponent(this, imgNineColumnsVarHeight);
    this.shadowRoot.getElementById('imgOne').classList.add(this.getAttribute("colWidth"));

    //access the h1 element inside our template
    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('ImgPath');
    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('AltImg');
    // this.shadowRoot.querySelector('#captionOne').innerText = this.getAttribute('Caption');
  }
}
window.customElements.define('image-nine-columns-var-height', ImgNineColumnsVarHeight);