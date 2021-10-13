//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
var click = false;
var srcArray = [];

const chapterTemplate = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
chapterTemplate.innerHTML = allStyles + `
<style>
#container {

}
#chapter {
  position: relative;
  display: flex;
  // background-color: #5C23FF;
  color: black;
  border-radius: 0;
  width: 100%;
  padding-top: 16px;
  /*margin: 0 auto 24px auto;*/
  border-top: 2px solid #f0f0f0;
  // height: 180px;
  
}

.chapter-opened {
  //background: linear-gradient(180deg, rgba(92,35,240,1) 0%, rgba(92,35,240,0) 32%) !important;
  // background: rgba(92,35,240,1);
  color: white;
}
.closed {
  height: 200px;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  cursor: pointer;
}
.project-preview {
  border-bottom: 1.5px solid #e7e7e7;
  width: 100%;
  height: 140px;
  position: relative;
  display: table;
  margin-bottom: 8px;
}
.project-preview:last-child {
  border-bottom: transparent;
}

#text, h3, h4 {
  // color: #ffffff;
}
.chapter-light #text, h3, h4 {
  color: #000000;
}

#h4-with-bottom-margin-var-width {
  // color: #ffffff !important;
}
.project-preview-text {
  display: inline-block;
  position: absolute;
  color: black;
  margin: 20px 18px;
  font-family: 'Arial', sans-serif;
}
#country p {
  display: inline;
}
#country::after {
  content: "";
  position: absolute;
  height: 20px;
  width: 30px;
  background-image: url('../../../media/arrow-thick.svg');
  background-size: contain;
  margin-top: 5px;
    margin-left: 8px;
}
#imgPath {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: inline-block;
  margin: 20px 18px;
}
#imgPath0 {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: inline-block;
  margin: 20px 18px;
}
#imgPath1 {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: inline-block;
  margin: 20px 18px;
}
#imgPath2 {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: inline-block;
  margin: 20px 18px;
}
#imgPath3 {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: inline-block;
  margin: 20px 18px;
}
.project-preview img {
  width: 200px;
  height: auto;
}
#plus {
  font-size: 56px;
  position: absolute;
  top: 31px;
  line-height: 0.8;
  right: 0;
  margin: auto;
  cursor: pointer;
  background-image: url('../../../media/plus-inverted.svg');
  background-size: cover;
  right: 16px;
  top: 16px;
  width: 32px;
  height: 32px;
}
@media only screen and (max-width: 1200px) {
  #plus {
    left: inherit;
    right: 26px;
  }
}

.to-minus {
  cursor: pointer;
  background-image: url('../../../media/minus.svg') !important;
  z-index: 99;
}
.content {
  display: inline;
}
#expand {
display: none;
position: absolute;
margin-top: 102px;
}
#variable-column {
  padding: 0;
}
#headline {
  
  // color: #ffffff;
  position: absolute;
  width: 700px;
  bottom: -49px;
  position: absolute;

  margin-bottom: 16px;
  font-size: 24px;
  text-transform: uppercase;
}
#subheadline {
  // color: #ffffff;
  // font-style: italic;
  right: 0;
  margin-top: -10px;
  position: absolute;
  // display: contents;
}
.chapter-light {

  border-top: 2px solid #f0f0f0;

}
.chapter-light #close {
  // padding-left: 50%;
}
.chapter-light #subheadline {
  color: black !important;
}
.chapter-light #headline {
  color: black !important;
}

.chapter-light #plus {
  background-image: url('../../../media/plus-inverted.svg');
  // top: 8px;
}
.chapter-light #plus.to-minus {
  background-image: url('../../../media/minus-inverted.svg') !important;
  // top: 8px;
}
.chapter-opened {
  height: 707px;
}
@media only screen and (max-width: 1200px) {
.chapter-opened {
    height: 1391px;
}
}

.chapter-opened #headline {
  bottom: inherit;
  margin-top: 13px;
}
.chapter-opened #subheadline {
  // display: none !important;
}
.read-more {
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
}
.chapter-light .read-more {
  color: black;
}
.preview-image {
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  margin-right: 3px;
}
#preview-images {
  display: flex;
  padding-top: 30px;

}
</style>

<div id="chapter" class="container-fluid closed">
<span id="plus"></span>
        <div id="close" class="content content-retracted col-12">
          <!-- <p id="headline"></p>-->
          <slot id="headline" name="headline"></slot>
          <slot id="subheadline" name="subheadline"></slot>
          <div id="preview-images"></div>
          <!--<p id="subheadline" class="d-none d-xl-block"></p>-->
        </div>

        <div id="expand" class="content content-expanded col-12 container container-fluid">
        <div class="row">

        
          <div class="col-12 col-md-6">
            <p id="text"></p>
         
            <figure>
          <!--  <figcaption><h4 class="read-more">Listen to the conversation</h4></figcaption>-->
               <audio
                 controls
                 src="/media/cc0-audio/t-rex-roar.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
            </figure>
          </div>
           <div class="col-12 col-md-6">
              
              <!--<h4 class="read-more">Click to read more</h4>-->
              <p id="projects"></p>
          </div>
          </div>
        </div>

</div>

`;

//initializing our class
class chapterCard extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, chapterTemplate);
    // createComponentFromSlot(this, 'headline');
    createComponentFromSlot(this, 'subheadline');
    createComponentFromSlot(this, 'text');
    createVariableComponents(this, 'projects');
    chapterCounter++;
    // console.log(chapterCounter)
    // console.log(document.get.getAttribute("path"))
    console.log(this.getElementsByTagName("div")[0].children[0].getAttribute("path"))

    let allPaths = [];
    let newImageString = "";
    for (let i = 0; i < this.getElementsByTagName("div")[0].children.length; i++) {
      allPaths[i] = this.getElementsByTagName("div")[0].children[i].getAttribute("path");
      newImageString += "<div class='preview-image' style='background-image: url("+allPaths[i]+");'></div>";
    }
    console.log(newImageString)
    this.shadowRoot.getElementById("preview-images").innerHTML =newImageString;


    if (chapterCounter % 2 === 0) {
      this.shadowRoot.getElementById("chapter").classList.add("chapter-light");
    }
    this.shadowRoot.getElementById("chapter").addEventListener('click', () => {
      if (!click) {
        this.shadowRoot.getElementById("expand").style.display = "block";
        this.shadowRoot.getElementById("chapter").classList.remove("closed");
        this.shadowRoot.getElementById("chapter").classList.add("chapter-opened");
        this.shadowRoot.getElementById("plus").classList.add("to-minus");
        this.shadowRoot.getElementById("preview-images").style.display = "none";
      } else {
        this.shadowRoot.getElementById("expand").style.display = "none";
        this.shadowRoot.getElementById("chapter").classList.add("closed");
        this.shadowRoot.getElementById("chapter").classList.remove("chapter-opened");
        this.shadowRoot.getElementById("plus").classList.remove("to-minus");
        this.shadowRoot.getElementById("preview-images").style.display = "flex";
        // this.shadowRoot.getElementById("chapter").classList.remove("chapter-opened");
      }
      click = !click;
    });

    // this.shadowRoot.querySelector('#img').src = this.getAttribute('imgPath');
    // this.shadowRoot.querySelector('#img').alt = this.getAttribute('altImg');
  }
}
window.customElements.define('chapter-card', chapterCard);