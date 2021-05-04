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
.caption {
  margin: 0;
  margin-top: 16px;
}
#container {
  margin-top: 36px;
}

</style>

<div id="container" class="container-fluid">
    <img id="imgOne" src="" alt="">
    <p class="col-4 caption p-0" id="captionOne">
    <slot name="caption"></slot>
    
    </p>
</div>

`;

//initializing our class
class ImgFullWidthVarHeight extends HTMLElement {
  constructor(){
    super();
    setupComponent(this, imgFullWidthVarHeight);


    //access the h1 element inside our template
    this.shadowRoot.querySelector('#imgOne').src = this.getAttribute('imgPath');
    this.shadowRoot.querySelector('#imgOne').alt = this.getAttribute('altImg');
    // this.shadowRoot.querySelector('#captionOne').innerText = this.getAttribute('caption');
    
    //VARIABLE WITH CODE  this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));

  }
}
window.customElements.define('image-full-width-var-height', ImgFullWidthVarHeight);