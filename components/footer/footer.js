

// IMPORT EVERY NEW COMPONENT HERE
var script1 = document.createElement('script');
script1.src = '/components/img/img.js';
document.head.appendChild(script1);


var h1WithBottomMargin = document.createElement('script');
h1WithBottomMargin.src = '/components/h1-with-bottom-margin/h1-with-bottom-margin.js';
document.head.appendChild(h1WithBottomMargin);


//IMPORT H2-WITH-BOTTOM-MARGIN
var scriptH2WithBottomMargin = document.createElement('script');
scriptH2WithBottomMargin.src = '/components/h2-with-bottom-margin/h2-with-bottom-margin.js';
document.head.appendChild(scriptH2WithBottomMargin);

//IMPORT H3-WITH-BOTTOM-MARGIN
var scriptH3WithBottomMargin = document.createElement('script');
scriptH3WithBottomMargin.src = '/components/h3-with-bottom-margin/h3-with-bottom-margin.js';
document.head.appendChild(scriptH3WithBottomMargin);

// IMPORT IMG GALLERY 
var scriptImgGallery = document.createElement('script');
scriptImgGallery.src = '/components/img-gallery/img-gallery.js';
document.head.appendChild(scriptImgGallery);

// IMPORT IMG GALLERY 
var scriptImageFullWidthVarHeight = document.createElement('script');
scriptImageFullWidthVarHeight.src = '/components/image-full-width-var-height/image-full-width-var-height.js';
document.head.appendChild(scriptImageFullWidthVarHeight);

// IMPORT Script top menu
var scriptTopMenu = document.createElement('script');
scriptTopMenu.src = '/components/top_menu/top_menu.js';
document.head.appendChild(scriptTopMenu);


const template = document.createElement('template');


var styleBase = '<link rel="stylesheet" href="./css/style.css">';
createTemplate(styleBase);

var styleFooter = '<link rel="stylesheet" href="./components/footer/footer.css">';
createTemplate(styleFooter);


var bootstrapLink = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" ></link>';
createTemplate(bootstrapLink);



if (currentTemplate) {
  if (currentTemplate === "Visualization-Almendra-Display") {
    var templateStyle = '<link rel="stylesheet" href="./css/Visualization-Almendra-Display.css">';
    createTemplate(templateStyle);
    console.log(templateStyle)
  }
}


var allStyles = bootstrapLink + styleBase + templateStyle;



//WRITE THE HTML FOR EACH COMPONENT HERE
function createTemplate(link) {
  template.innerHTML = styleFooter + allStyles + `
  <div id="footer">
  <div>
    <h1></h1>
    <p>footer</p>
    </div>
  </div>
  `;
}
class Footer extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    if (this.getAttribute('base') === "false") {
      styleBase = '<link rel="stylesheet" href="../../css/style.css">'
      styleFooter = '<link rel="stylesheet" href="/../../components/footer/footer.css">';//../../components/footer/footer.css
      if (currentTemplate === "Visualization-Almendra-Display") {
        templateStyle = '<link rel="stylesheet" href="../../css/Visualization-Almendra-Display.css">';
      }

      createTemplate(styleFooter);
      createTemplate(templateStyle);
      createTemplate(styleBase);
      allStyles = styleBase  + bootstrapLink + templateStyle;
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title');
    console.log(this.getAttribute('name'))
    //this.getAttribute('name');
  }
}

window.customElements.define('m-footer', Footer);