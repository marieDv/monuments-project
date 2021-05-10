////////////////////////////////////////////////////////////////////////////////////////////////////////
//*** createVariableText
//** the function has 2 parameters 1: "this" refers to the current object(this component) you are programming 
//**2: is the id that you are rendering the component to in your template **/
function createVariableText(base, id, position, container) {
  let span = base.getElementsByTagName('span');
  for (let i = 0; i < span.length; i++) {

    let tempText = (span[i].slot).toString();
    if (position === '' || position === tempText.charAt(0)) {


      if (tempText.charAt(0) === '1' || tempText.charAt(0) === '2' || tempText.charAt(0) === '3' || tempText.charAt(0) === '4' || tempText.charAt(0) === '5') {
        tempText = ((span[i].slot).split('-'))[1];

      }

      if (tempText === "text") {
        slotsForTemplate += "<p>" + span[i].innerHTML + "</p>";
      }
      if (tempText === "h2") {
        slotsForTemplate += "<h2-section-title><span slot='title'>" + span[i].innerHTML + "</span></h2-section-title>";
      }
      if (tempText === "h1") {
        slotsForTemplate += "<h1-with-bottom-margin><span slot='title'>" + span[i].innerHTML + "</span></h1-with-bottom-margin>";
      }
      if (tempText === "h3") {
        slotsForTemplate += "<h3-with-bottom-margin><span slot='title'>" + span[i].innerHTML + "</span></h3-with-bottom-margin>";
      }
      if (tempText === "block-quote") {
        slotsForTemplate += "<block-quote-width-left-and-bottom-margin-var-width><span slot='text'>" + span[i].innerHTML + "</span></block-quote-width-left-and-bottom-margin-var-width>";
      }
    }
  }

  base.shadowRoot.getElementById(id).innerHTML = slotsForTemplate;
  base.shadowRoot.getElementById(id).classList.add(base.getAttribute("colWidth"));
  slotsForTemplate = '';

}




function createVariableComponents(base, id) {
  let containerTemp = base.getElementsByTagName('div');
  let container;
  for (let i = 0; i < containerTemp.length; i++) {
    console.log(containerTemp[i].id)
    if (containerTemp[i].id === id) {
      container = containerTemp[i];
    }
  }


  let span = container.getElementsByTagName('span');


  for (let i = 0; i < span.length; i++) {
    console.log(span)
    let tempText = (span[i].slot).toString();

    if (tempText.charAt(0) === '1' || tempText.charAt(0) === '2' || tempText.charAt(0) === '3' || tempText.charAt(0) === '4' || tempText.charAt(0) === '5') {
      tempText = ((span[i].slot).split('-'))[1];
    }

    if (tempText === "text") {
      slotsForTemplate += "<p>" + span[i].innerHTML + "</p>";
    }
    if (tempText === "h2") {
      slotsForTemplate += "<h2-section-title><span slot='title'>" + span[i].innerHTML + "</span></h2-section-title>";
    }
    if (tempText === "h1") {
      slotsForTemplate += "<h1-with-bottom-margin><span slot='title'>" + span[i].innerHTML + "</span></h1-with-bottom-margin>";
    }
    if (tempText === "h3") {
      slotsForTemplate += "<h3-with-bottom-margin><span slot='title'>" + span[i].innerHTML + "</span></h3-with-bottom-margin>";
    }
    if (tempText === "block-quote") {
      slotsForTemplate += "<block-quote-width-left-and-bottom-margin-var-width><span slot='text'>" + span[i].innerHTML + "</span></block-quote-width-left-and-bottom-margin-var-width>";
    }
    if (tempText === "img") {
      slotsForTemplate += "<image-full-width-var-height imgPath='" + span[i].getAttribute("imgPath") + "' altImg='" + span[i].getAttribute("altImg") + "' ><span slot='caption'>" + span[i].innerHTML + "</span></image-full-width-var-height>";
    }

  }

  base.shadowRoot.getElementById(id).innerHTML = slotsForTemplate;
  base.shadowRoot.getElementById(id).classList.add(base.getAttribute("colWidth"));
  slotsForTemplate = '';
}




//*** SETUP A NEW COMPONENT
function setupComponent(base, name) {
  base.showInfo = true;
  base.attachShadow({ mode: 'open' }); //open shadow root
  base.shadowRoot.appendChild(name.content.cloneNode(true));//attach template
}

function createElementFromString(base, string, id) {
  base.shadowRoot.getElementById(id).innerHTML = string;
}





//*** CREATE NESTED COMPONENT
function createNestedComponent(base, name, attributes, col, slots) {
  let string = "<" + name + " ";
  for (let i = 0; i < attributes.length; i++) {
    string += attributes[i] + "='" + base.getAttribute(attributes[i]) + "' ";
    // string += attributes[i];
  }
  if (col) {
    string += "colWidth='" + col + "' ";
  }
  string += ">";
  if (slots) {
    for (let i = 0; i < slots.length; i++) {
      string += '<span slot=' + slots[i] + '>' + base.getAttribute(slots[i]) + "</span>";
    }
  }
  string += "</" + name + ">";
  console.log(string)
  //** CREATE A NEW ELEMENT **/
  createElementFromString(base, string, name);

}



function createComponentFromSlot(base, id) {
  for (let i = 0; i < base.getElementsByTagName('span').length; i++) {
    if (base.getElementsByTagName('span')[i].getAttribute("id") === id) {

      let tempText = (base.getElementsByTagName('span')[i].slot).toString();

      if (tempText.charAt(0) === '1' || tempText.charAt(0) === '2' || tempText.charAt(0) === '3' || tempText.charAt(0) === '4' || tempText.charAt(0) === '5') {
        tempText = ((base.getElementsByTagName('span')[i].slot).split('-'))[1];
      }


      if (tempText === "img") {
        slotsForTemplate += "<image-full-width-var-height imgPath='" + base.getElementsByTagName('span')[i].getAttribute("imgPath") + "' ><span slot='caption'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></image-full-width-var-height>";
      }
      if (tempText === "text") {
        slotsForTemplate += "<p>" + base.getElementsByTagName('span')[i].innerHTML + "</p>";
      }
      if (tempText === "h2") {
        slotsForTemplate += "<h2-section-title><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h2-section-title>";
      }
      if (tempText === "h1") {
        slotsForTemplate += "<h1-with-bottom-margin><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h1-with-bottom-margin>";
      }
      if (tempText === "h3") {
        slotsForTemplate += "<h3-with-bottom-margin><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h3-with-bottom-margin>";
      }
      if (tempText === "h4") {
        slotsForTemplate += "<h4-with-bottom-margin-var-width><span slot='title'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></h4-with-bottom-margin-var-width>";
      }
      if (tempText === "block-quote") {
        slotsForTemplate += "<block-quote-width-left-and-bottom-margin-var-width><span slot='text'>" + base.getElementsByTagName('span')[i].innerHTML + "</span></block-quote-width-left-and-bottom-margin-var-width>";
      }

      // }

    }
  }


  base.shadowRoot.getElementById(id).innerHTML = slotsForTemplate;
  base.shadowRoot.getElementById(id).classList.add(base.getAttribute("colWidth"));
  slotsForTemplate = '';

}



////////////////////////////////////////////////////////////////////////////////////////////////////////
