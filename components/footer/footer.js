

// IMPORT EVERY NEW COMPONENT HERE
var script1 = document.createElement('script');
script1.src = '/components/img/img.js';
document.head.appendChild(script1);


const template = document.createElement('template');
var styleLink = '<link rel="stylesheet" href="./components/footer/footer.css">';
createTemplate(styleLink);



//WRITE THE HTML FOR EACH COMPONENT HERE
function createTemplate(link) {
  template.innerHTML = styleLink + `
  <div id="footer">
  <div>
    <h1></h1>
    <p>This is made by ID1 not K&V</p>
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
      createTemplate(styleLink);
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title');
    console.log(this.getAttribute('name'))
    //this.getAttribute('name');
  }
}

window.customElements.define('m-footer', Footer);