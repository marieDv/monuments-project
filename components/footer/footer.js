

// IMPORT EVERY NEW COMPONENT HERE
var script1 = document.createElement('script');
script1.src = '/components/img/img.js';
document.head.appendChild(script1);

var h1WithBottomMargin = document.createElement('script');
h1WithBottomMargin.src = '/components/h1-with-bottom-margin/h1-with-bottom-margin.js';
document.head.appendChild(h1WithBottomMargin);

// IMPORT IMG GALLERY 
var scriptImgGallery = document.createElement('script');
scriptImgGallery.src = '/components/img-gallery/img-gallery.js';
document.head.appendChild(scriptImgGallery);
// IMPORT Script top menu
var scriptTopMenu = document.createElement('script');
scriptTopMenu.src = '/components/top_menu/top_menu.js';
document.head.appendChild(scriptTopMenu);


// var cssId = 'myCss';  // you could encode the css path itself to generate id..
// if (!document.getElementById(cssId))
// {
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = cssId;
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
//     link.media = 'all';
//     head.appendChild(link);
// }



const template = document.createElement('template');
var styleLink = '<link rel="stylesheet" href="./components/footer/footer.css">';
createTemplate(styleLink);

if (currentTemplate) {
  if (currentTemplate === "Visualization-Almendra-Display") {
    var templateStyle = '<link rel="stylesheet" href="./css/Visualization-Almendra-Display.css">';
    createTemplate(templateStyle);
    console.log(templateStyle)
  }
}

//WRITE THE HTML FOR EACH COMPONENT HERE
function createTemplate(link) {
  template.innerHTML = styleLink + templateStyle + `
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
      console.log("false")
      styleLink = '<link rel="stylesheet" href="/../../components/footer/footer.css">';//../../components/footer/footer.css
      if (currentTemplate === "Visualization-Almendra-Display") {
        templateStyle = '<link rel="stylesheet" href="../../css/Visualization-Almendra-Display.css">';
      }
      createTemplate(styleLink);
      createTemplate(templateStyle);
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title');
    console.log(this.getAttribute('name'))
    //this.getAttribute('name');
  }
}

window.customElements.define('m-footer', Footer);