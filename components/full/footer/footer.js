var chapterCounter = 0;

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


//IMPORT H2-SECTION-TITLE
var scriptH2SectionTitle = document.createElement('script');
scriptH2SectionTitle.src = '/components/base/h2-section-title/h2-section-title.js';
document.head.appendChild(scriptH2SectionTitle);

//IMPORT H3-WITH-BOTTOM-MARGIN
var scriptH3WithBottomMargin = document.createElement('script');
scriptH3WithBottomMargin.src = '/components/base/h3-with-bottom-margin/h3-with-bottom-margin.js';
document.head.appendChild(scriptH3WithBottomMargin);


//IMPORT BUTTON
var scriptButton = document.createElement('script');
scriptButton.src = '/components/base/button/button.js';
document.head.appendChild(scriptButton);

//IMPORT H4 WITH BOTTOM MARGIN VAR WIDTH
var scriptH4WithBottomMarginVarWidth = document.createElement('script');
scriptH4WithBottomMarginVarWidth.src = '/components/base/h4-with-bottom-margin-var-width/h4-with-bottom-margin-var-width.js';
document.head.appendChild(scriptH4WithBottomMarginVarWidth);

// 
var BlockQuoteWithLeftAndBottomMarginVarWidthScript = document.createElement('script');
BlockQuoteWithLeftAndBottomMarginVarWidthScript.src = '/components/base/block-quote-with-left-and-bottom-margin-var-width/block-quote-with-left-and-bottom-margin-var-width.js';
document.head.appendChild(BlockQuoteWithLeftAndBottomMarginVarWidthScript);

// VARIABLE TEXT
var variableTextScript = document.createElement('script');
variableTextScript.src = '/components/base/variable-text/variable-text.js';
document.head.appendChild(variableTextScript);

makeScript('/components/base/space-64/space-64.js');



makeScript('/components/base/pull-quote-with-bottom-margin-var-width/pull-quote-with-bottom-margin-var-width.js');
makeScript('/components/base/body-text/body-text.js');
makeScript('/components/base/space-32/space-32.js');
makeScript('/components/base/space-120/space-120.js');
makeScript('/components/base/space-360/space-360.js');

// ************************************************************************************************************************
// IMPORT FULL WIDTH COMPONENTS
// ******************************

makeScript('/components/full/chapter/chapter.js');
makeScript('/components/full/references/references.js');
makeScript('/components/full/timeline-version-01/timeline-version-01.js');
makeScript('/components/full/timeline-version-01-double/timeline-version-01-double.js');
makeScript('/components/full/timeline-version-02/timeline-version-02.js');


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

makeScript('/components/halves/left-text-right-image/left-text-right-image.js')

makeScript('/components/halves/background-image-text-left/background-image-text-left.js');
makeScript('/components/halves/background-image-text-right/background-image-text-right.js');

makeScript('/components/halves/h3-headlines-6column-image-body-text/h3-headlines-6column-image-body-text.js');

makeScript('/components/halves/mirror-h3-headlines-6column-image-body-text/mirror-h3-headlines-6column-image-body-text.js');

makeScript('/components/halves/h3-headlines-two-3column-image-body-text/h3-headlines-two-3column-image-body-text.js');

makeScript('/components/halves/h3-headlines-2column-4column-image-body-text/h3-headlines-2column-4column-image-body-text.js');

makeScript('/components/halves/h3-headlines-4column-2column-image-body-text/h3-headlines-4column-2column-image-body-text.js');

makeScript('/components/halves/mirror-h4-4column-text-2column-image/mirror-h4-4column-text-2column-image.js');

makeScript('/components/halves/h3-headlines-2column-3column-image-body-text/h3-headlines-2column-3column-image-body-text.js');

makeScript('/components/halves/h3-headlines-3column-2column-image-body-text/h3-headlines-3column-2column-image-body-text.js');

makeScript('/components/halves/h3-headlines-2column-3column-image-body-text/h3-headlines-2column-3column-image-body-text.js')

makeScript('/components/halves/mirror-h3-headlines-6column-image-body-text/mirror-h3-headlines-6column-image-body-text.js')
// ******************************************************************************************************************************************************
// IMPORT THIRDS COMPONENTS

makeScript('/components/thirds/3-column-text-image-wide/3-column-text-image-wide.js');
makeScript('/components/thirds/3-headlines-3-images/3-headlines-3-images.js');
makeScript('/components/thirds/4-images-text/4-images-text.js');

makeScript('/components/thirds/2-columns-text-images-right/2-columns-text-images-right.js');
makeScript('/components/thirds/image-wide-3-column-text/image-wide-3-column-text.js')
makeScript('/components/thirds/text-4-images/text-4-images.js');
makeScript('/components/thirds/image-wide-3-column-text/image-wide-3-column-text.js');
makeScript('/components/thirds/2-columns-text-images-right/2-columns-text-images-right.js');
makeScript('/components/thirds/images-left-2-columns-text/images-left-2-columns-text.js');

// ******************************************************************************************************************************************************
// IMPORT QUARTER COMPONENTS


var scriptHeadlines4ImagesBodyText = document.createElement('script');
scriptHeadlines4ImagesBodyText.src = '/components/quarters/headlines-4-images-body-text/headlines-4-images-body-text.js';
document.head.appendChild(scriptHeadlines4ImagesBodyText);

makeScript('/components/quarters/headlines-eight-images/headlines-eight-images.js');
makeScript('/components/quarters/left-6column-text-right-3column-images-text/left-6column-text-right-3column-images-text.js');
makeScript('/components/quarters/right-6column-text-left-3column-images-text/right-6column-text-left-3column-images-text.js');
makeScript('/components/quarters/left-6column-image-right-3column-texts/left-6column-image-right-3column-texts.js');
makeScript('/components/quarters/right-6column-image-left-3column-texts/right-6column-image-left-3column-texts.js');
makeScript('/components/quarters/left-9column-image-right-3column-text/left-9column-image-right-3column-text.js');
makeScript('/components/quarters/right-9column-image-left-3column-text/right-9column-image-left-3column-text.js');




// ******************************************************************************************************************************************************
// IMPORT DOCS
makeScript('/components/docs/doc-element.js');

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
  if(currentTemplate === "Arial"){
    var templateStyle = '<style></style>';
    createTemplate(templateStyle);
  }
  if (currentTemplate === "Almendra") {
    var templateStyle = '<link rel="stylesheet" href="./css/Visualization-Almendra-Display.css">';
    createTemplate(templateStyle);
  }
  if (currentTemplate === "VTCMartin") {
    var templateStyle = '<link rel="stylesheet" href="./css/VTCMartin.css">';
    createTemplate(templateStyle);
  }
  if (currentTemplate === "Ortica") {
    var templateStyle = '<link rel="stylesheet" href="./css/Ortica.css">';
    createTemplate(templateStyle);
  }
}


var allStyles = bootstrapLink + styleBase + templateStyle;


//WRITE THE HTML FOR EACH COMPONENT HERE
function createTemplate(link) {
  template.innerHTML = styleFooter + bootstrapLink + `
  <style>
      #footer {
       /** background-color: #E2FA61; **/
        font-family: "NotCourierSans", sans-serif;
        bottom: 0;
        padding: 36px 18px 18px;
        position: relative;
        height: 188px;
      }
      a {
        font-size: 16px;
        color: #000000;
        padding-right: 32px;
      }
      #contact {
        position: absolute;
        bottom: 8px;
        right: 8px;
        z-index: 99px;
        font-family: "Arial", sans-serif;
        opacity: 0.4;
        font-size: 14px;
      }
  </style>
  <div id="footer">
  <div>
    <a target="_blank" href="https://ididididid.club/">idididid Radio</a>
    <a target="_blank" href="https://www.instagram.com/idididididradio/">Instagram</a>

    <!--<p id="contact">Contact Us: <a href="mailto:theaftermonument@gmail.co">theaftermonument@gmail.com</a></p>-->
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
      if (currentTemplate === "Almendra") {
        templateStyle = '<link rel="stylesheet" href="../../css/Visualization-Almendra-Display.css">';
      }
      if (currentTemplate === "VTCMartin") {
        templateStyle = '<link rel="stylesheet" href="../../css/VTCMartin.css">';
      }
      if (currentTemplate === "Ortica") {
        templateStyle = '<link rel="stylesheet" href="../../css/Ortica.css">';
      }

      createTemplate(styleFooter);
      createTemplate(templateStyle);
      createTemplate(styleBase);
      allStyles = styleBase  + bootstrapLink + templateStyle;
    }
    // this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title');
    setTimeout(() => {
      this.shadowRoot.appendChild(template.content.cloneNode(true));  
    }, 500);
    
    

  }
}

window.customElements.define('m-footer', Footer);







function makeScript(src){
  let temp = document.createElement('script');
  temp.src = src;
  document.head.appendChild(temp);

}