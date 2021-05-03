const VariableTextTemplate = document.createElement('template');
VariableTextTemplate.innerHTML = allStyles + `
<style>
span {
  display: block;
}

</style>

<div class="container-fluid">
<div id="variable-text-base" class="col-5">
</div>
<div class="col-1"></div>
</div> 
`;

var slotsForTemplate = "";

class VariableText extends HTMLElement {


  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(VariableTextTemplate.content.cloneNode(true));

    grabTextSlots(this);
    this.shadowRoot.getElementById('variable-text-base').innerHTML = slotsForTemplate;
    this.shadowRoot.getElementById('variable-text-base').classList.add(this.getAttribute("colWidth"));

  }
}

window.customElements.define('variable-text', VariableText);

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