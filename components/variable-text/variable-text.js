const VariableTextTemplate = document.createElement('template');
VariableTextTemplate.innerHTML = allStyles + `
<style>
span {
  display: block;
  color: red;
}

</style>
<div id="variable-text-base" class="container-fluid justify-content-center">


</div> 
`;
{/* <h2><slot name="h2"/></h2>
<p><slot name="text"/></p>
<h1-with-bottom-margin>
<span slot="content"><slot name="h1-content"></slot></span>
</h1-with-bottom-margin> */}
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
        slotsForTemplate +="<h2>"+this.getElementsByTagName('span')[i].innerHTML+"</h2>";
      }
      if(this.getElementsByTagName('span')[i].slot === "h1-content"){
        slotsForTemplate +="<h1-with-bottom-margin><span slot='content'>"+this.getElementsByTagName('span')[i].innerHTML+"</span></h1-with-bottom-margin>";
      }
    }
    this.shadowRoot.getElementById('variable-text-base').innerHTML = slotsForTemplate;
  }
}

window.customElements.define('variable-text', VariableText);

