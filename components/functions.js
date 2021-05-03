////////////////////////////////////////////////////////////////////////////////////////////////////////
//*** createVariableText
//** the function has 2 parameters 1: "this" refers to the current object(this component) you are programming 
//**2: is the id that you are rendering the component to in your template **/
function createVariableText(base, elementId) {
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

  base.shadowRoot.getElementById(elementId).innerHTML = slotsForTemplate;
  base.shadowRoot.getElementById(elementId).classList.add(base.getAttribute("colWidth"));

}

//*** SETUP A NEW COMPONENT
function setupComponent(base) {
  base.showInfo = true;
  base.attachShadow({ mode: 'open' }); //open shadow root
  base.shadowRoot.appendChild(imageLeftTextRight.content.cloneNode(true));//attach template
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
      string += '<span slot='+slots[i]+'>'+base.getAttribute(slots[i])+"</span>";
    }
  }
  string += "</" + name + ">";
  console.log(string);
  //** CREATE A NEW ELEMENT **/
  createElementFromString(base, string, name);

}


////////////////////////////////////////////////////////////////////////////////////////////////////////
