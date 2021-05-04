// ******************************************************************************************************************************************************
// IMPORT EXTERNAL LIBRARIES & FUNCTIONS FILE


var scriptVis = document.createElement('script');
scriptVis.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
document.head.appendChild(scriptVis);

var scriptVisTimeline = document.createElement('script');
scriptVisTimeline.src = 'https://visjs.github.io/vis-timeline/standalone/umd/vis-timeline-graph2d.min.js';
document.head.appendChild(scriptVisTimeline);

var functionsFile = document.createElement('script');
functionsFile.src = '/components/functions.js';
document.head.appendChild(functionsFile);

// ******************************************************************************************************************************************************
// IMPORT BASE COMPONENTS

var h1WithBottomMargin = document.createElement('script');
h1WithBottomMargin.src = '/components/base/h1-with-bottom-margin/h1-with-bottom-margin.js';
document.head.appendChild(h1WithBottomMargin);


//IMPORT H2-WITH-BOTTOM-MARGIN
var scriptH2WithBottomMargin = document.createElement('script');
scriptH2WithBottomMargin.src = '/components/base/h2-with-bottom-margin/h2-with-bottom-margin.js';
document.head.appendChild(scriptH2WithBottomMargin);

//IMPORT H3-WITH-BOTTOM-MARGIN
var scriptH3WithBottomMargin = document.createElement('script');
scriptH3WithBottomMargin.src = '/components/base/h3-with-bottom-margin/h3-with-bottom-margin.js';
document.head.appendChild(scriptH3WithBottomMargin);

//PULL-QUOTE-WITH-BOTTOM-MARGIN-VAR-WIDTH
var scriptPullQuoteWithBottomMarginVarWidth = document.createElement('script');
scriptPullQuoteWithBottomMarginVarWidth.src = '/components/base/pull-quote-with-bottom-margin-var-width/pull-quote-with-bottom-margin-var-width.js';
document.head.appendChild(scriptPullQuoteWithBottomMarginVarWidth);

//BUTTON
var scriptButton = document.createElement('script');
scriptButton.src = '/components/base/button/button.js';
document.head.appendChild(scriptButton);

// 
var BlockQuoteWithLeftAndBottomMarginVarWidthScript = document.createElement('script');
BlockQuoteWithLeftAndBottomMarginVarWidthScript.src = '/components/base/block-quote-with-left-and-bottom-margin-var-width/block-quote-with-left-and-bottom-margin-var-width.js';
document.head.appendChild(BlockQuoteWithLeftAndBottomMarginVarWidthScript);

// VARIABLE TEXT
var variableTextScript = document.createElement('script');
variableTextScript.src = '/components/base/variable-text/variable-text.js';
document.head.appendChild(variableTextScript);


// ************************************************************************************************************************
// IMPORT FULL WIDTH COMPONENTS
// ******************************

// IMPORT image-full-width-var-height
var scriptImageFullWidthVarHeight = document.createElement('script');
scriptImageFullWidthVarHeight.src = '/components/full/image-full-width-var-height/image-full-width-var-height.js';
document.head.appendChild(scriptImageFullWidthVarHeight);

// IMPORT image-9-columns-var-height
var scriptImgNineColumnsVarHeight = document.createElement('script');
scriptImgNineColumnsVarHeight.src = '/components/full/image-nine-columns-var-height/image-nine-columns-var-height.js';
document.head.appendChild(scriptImgNineColumnsVarHeight);

// IMPORT image-6-columns-var-height
var scriptImgSixColumnsVarHeight = document.createElement('script');
scriptImgSixColumnsVarHeight.src = '/components/full/image-six-columns-var-height/image-six-columns-var-height.js';
document.head.appendChild(scriptImgSixColumnsVarHeight);

// IMPORT image-3-columns-var-height
var scriptImgThreeColumnsVarHeight = document.createElement('script');
scriptImgThreeColumnsVarHeight.src = '/components/full/image-three-columns-var-height/image-three-columns-var-height.js';
document.head.appendChild(scriptImgThreeColumnsVarHeight);

// IMPORT Script top menu
var scriptTopMenu = document.createElement('script');
scriptTopMenu.src = '/components/full/top_menu/top_menu.js';
document.head.appendChild(scriptTopMenu);

// IMPORT Header 
var scriptHeaderSingle = document.createElement('script');
scriptHeaderSingle.src = '/components/full/header-single/header-single.js';
document.head.appendChild(scriptHeaderSingle);


// IMPORT Timeline 
var scriptTimeline = document.createElement('script');
scriptTimeline.src = '/components/full/timeline/timeline.js';
document.head.appendChild(scriptTimeline);


// ******************************************************************************************************************************************************
// IMPORT HALF WIDTH COMPONENTS


// IMPORT TWO IMAGES EQUAL WIDTH
var scriptTwoImagesSameWidthVarHeight = document.createElement('script');
scriptTwoImagesSameWidthVarHeight.src = '/components/halves/two-images-same-width-var-height/two-images-same-width-var-height.js';
document.head.appendChild(scriptTwoImagesSameWidthVarHeight);

// IMPORT TWO IMAGES EQUAL WIDTH
var scriptTwohalvesImageLeftTextRight = document.createElement('script');
scriptTwohalvesImageLeftTextRight.src = '/components/halves/image-left-text-right/image-left-text-right.js';
document.head.appendChild(scriptTwohalvesImageLeftTextRight);

// ******************************************************************************************************************************************************
// ******************************************************************************************************************************************************
// ******************************************************************************************************************************************************




const template = document.createElement('template');


var styleBase = '<link rel="stylesheet" href="./css/baseStyle.css">';
createTemplate(styleBase);

var styleFooter = '<link rel="stylesheet" href="./components/full/footer/footer.css">';
createTemplate(styleFooter);

var bootstrapLink = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" ></link>';
createTemplate(bootstrapLink);



if (currentTemplate) {
  if(currentTemplate === "Standard"){
    var templateStyle = '<style></style>';
    createTemplate(templateStyle);
  }
  if (currentTemplate === "Visualization-Almendra-Display") {
    var templateStyle = '<link rel="stylesheet" href="./css/Visualization-Almendra-Display.css">';
    createTemplate(templateStyle);
  }
}


var allStyles = bootstrapLink + styleBase + templateStyle;


//WRITE THE HTML FOR EACH COMPONENT HERE
function createTemplate(link) {
  template.innerHTML = styleFooter + bootstrapLink + `
  <div id="footer">
  <div>
    <h1></h1>
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
      styleBase = '<link rel="stylesheet" href="./../../css/baseStyle.css">'
      styleFooter = '<link rel="stylesheet" href="/../../components/full/footer/footer.css">';
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

  }
}

window.customElements.define('m-footer', Footer);