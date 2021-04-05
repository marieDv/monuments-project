const VariableTextTemplate = document.createElement('template');
VariableTextTemplate.innerHTML = allStyles + `
<style>
span {
  display: block;
}

</style>
<div id="variable-text-base" class="container-fluid justify-content-center">
<div>
</div>

</div> 
`;

var slotsForTemplate = "";

class VariableText extends HTMLElement {


  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(VariableTextTemplate.content.cloneNode(true));
    
    for (let i = 0; i < this.getElementsByTagName('span').length; i++) {
      console.log(this.getElementsByTagName('span')[i].slot);
      if (this.getElementsByTagName('span')[i].slot === "text") {
        slotsForTemplate +="<p>"+this.getElementsByTagName('span')[i].innerHTML+"</p>";
      }
      if (this.getElementsByTagName('span')[i].slot === "h2") {
        slotsForTemplate +="<h2-with-bottom-margin><span slot='title'>"+this.getElementsByTagName('span')[i].innerHTML+"</span></h2-with-bottom-margin>";
      }
      if(this.getElementsByTagName('span')[i].slot === "h1"){
        slotsForTemplate +="<h1-with-bottom-margin><span slot='title'>"+this.getElementsByTagName('span')[i].innerHTML+"</span></h1-with-bottom-margin>";
      }
      if(this.getElementsByTagName('span')[i].slot === "h3"){
        slotsForTemplate +="<h3-with-bottom-margin><span slot='title'>"+this.getElementsByTagName('span')[i].innerHTML+"</span></h3-with-bottom-margin>";
      }
    }
    this.shadowRoot.getElementById('variable-text-base').innerHTML = slotsForTemplate;
  }
}

window.customElements.define('variable-text', VariableText);

