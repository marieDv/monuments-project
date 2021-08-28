//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
var click = false;


const chapterTemplate = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
chapterTemplate.innerHTML = allStyles + `
<style>
#container {

}
#chapter {
  position: relative;
  background-color: #5C23FF;
  color: #fff;
  border-radius: 20px;
  width: 84%;
  margin: 0 auto 24px auto;
}
.chapter-opened {
  background: linear-gradient(180deg, rgba(92,35,240,1) 0%, rgba(92,35,240,0) 32%) !important;
}
.closed {
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.project-preview {
  background: #E2FA61;
  width: 100%;
  height: 140px;
  position: relative;
  display: table;
  border-radius: 20px;
  margin-bottom: 8px;
  
}

#text, h3, h4 {
  color: #000000;
}

#h4-with-bottom-margin-var-width {
  color: #ffffff !important;
}
.project-preview-text {
  display: inline-block;
  position: absolute;
  color: black;
  margin: 20px 18px;
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
.project-preview img {
  width: 200px;
  height: auto;
}
#plus {
  font-size: 56px;
  position: absolute;
  top: 20px;
  line-height: 0.8;
  right: 25px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-image: url('../../../media/plus.svg');
  background-size: cover;
}
.to-minus {
  background-image: url('../../../media/minus.svg') !important;
}
.content {
  display: inline;
}
#expand {
display: none;
}
#variable-column {
  padding: 0;
}
#headline {
  margin-top: -18px;
  color: #ffffff;
}
#subheadline {
  color: #ffffff;
  font-style: italic;
}
</style>

<div id="chapter" class="container-fluid closed">
<span id="plus"></span>
        <div id="close" class="content content-retracted col-12">
          <p id="headline"></p>
          <p id="subheadline"></p>
        </div>

        <div id="expand" class="content content-expanded col-12 container container-fluid">
        <div class="row">

        
          <div class="col-6">
            <p id="text"></p>
         
            <figure>
            <figcaption><h4>Listen to the conversation</h4></figcaption>
               <audio
                 controls
                 src="/media/cc0-audio/t-rex-roar.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
            </figure>
          </div>
           <div class="col-6">
              <h3>Featured monuments</h3>
              <h4>Click to read more</h4>
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
    createComponentFromSlot(this, 'headline');
    createComponentFromSlot(this, 'subheadline');
    createComponentFromSlot(this, 'text');
    createVariableComponents(this, 'projects');
    this.shadowRoot.getElementById("chapter").addEventListener('click', () => {
      if (!click) {
        this.shadowRoot.getElementById("expand").style.display = "block";
        this.shadowRoot.getElementById("chapter").classList.remove("closed");
        this.shadowRoot.getElementById("chapter").classList.add("chapter-opened");
        this.shadowRoot.getElementById("plus").classList.add("to-minus");
      } else {
        this.shadowRoot.getElementById("expand").style.display = "none";
        this.shadowRoot.getElementById("chapter").classList.add("closed");
        this.shadowRoot.getElementById("chapter").classList.remove("chapter-opened");
        this.shadowRoot.getElementById("plus").classList.remove("to-minus");
        // this.shadowRoot.getElementById("chapter").classList.remove("chapter-opened");
      }
      click = !click;
    });

    // this.shadowRoot.querySelector('#img').src = this.getAttribute('imgPath');
    // this.shadowRoot.querySelector('#img').alt = this.getAttribute('altImg');
  }
}
window.customElements.define('chapter-card', chapterCard);