//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const imageLeftTextRight = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
imageLeftTextRight.innerHTML = allStyles + `

<style>
img {
    width: 100%;
    height: auto;
} 

p {
  margin-top: 16px;
  font-size:14px;
  line-height: 16px;
}

#container {
  margin-top: 36px;
}

</style>

<div class="container-fluid">
<div class="row">
<div id="variable-text-base" class="col-5">
</div>
<div class="col-1"></div>

<div class="col-6" id="imgSlot"></div>
</div>
</div> 

`;

//initializing our class
class halvesImageLeftTextRight extends HTMLElement {
  constructor() {
    super();

    //initialize the shadow dom
    this.showInfo = true;
    this.attachShadow({ mode: 'open' }); //open shadow root
    //add bootstrap-stylesheet
    this.shadowRoot.appendChild(imageLeftTextRight.content.cloneNode(true));//attach template
    
    let fullImgComponentPath = "<image-six-columns-var-height colWidth='col-12' imgPath='" + this.getAttribute('ImgPath') + "' altImg='" + this.getAttribute('altImg') + "'><span slot='caption'>"+this.getAttribute('caption')+"</span></image-six-columns-var-height>";
    this.shadowRoot.getElementById('imgSlot').innerHTML = fullImgComponentPath;

    grabTextSlots(this);


    this.shadowRoot.getElementById('variable-text-base').innerHTML = slotsForTemplate;
    this.shadowRoot.getElementById('variable-text-base').classList.add(this.getAttribute("colWidth"));

  }
}
window.customElements.define('halves-image-left-text-right', halvesImageLeftTextRight);


function grabTextSlots(base){
  for (let i = 0; i < base.getElementsByTagName('span').length; i++) {
    console.log(base.getElementsByTagName('span')[i].slot);
    if (base.getElementsByTagName('span')[i].slot === "text") {
      slotsForTemplate += "<p>" + base.getElementsByTagName('span')[i].innerHTML + "</p>";
    }
    if (base.getElementsByTagName('span')[i].slot === "h2") {
      slotsForTemplate += "<h2-with-bottom-margin><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h2-with-bottom-margin>";
    }
    if (base.getElementsByTagName('span')[i].slot === "h1") {
      slotsForTemplate += "<h1-with-bottom-margin><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h1-with-bottom-margin>";
    }
    if (base.getElementsByTagName('span')[i].slot === "h3") {
      slotsForTemplate += "<h3-with-bottom-margin><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h3-with-bottom-margin>";
    }
    if (base.getElementsByTagName('span')[i].slot === "block-quote") {
      slotsForTemplate += "<block-quote-width-left-and-bottom-margin-var-width><span slot='text'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></block-quote-width-left-and-bottom-margin-var-width>";
    }
  }
}