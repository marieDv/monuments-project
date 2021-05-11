// IMAGE LEFT TEXT RIGHT
// Attributes: headline, names, description, variable-text-slot, text


const DocElementTemplate = document.createElement("template");
DocElementTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}
#code {
  background-color: #a2a2a2;
  display: block;
  color: yellow;
}
p {
  display: inline;
}
#headline {
  margin-bottom: 0;
}
#names {
  font-weight: 800;
  display: block;
  
}
#attributes p {
  display: block;
}
</style>

<div id="cotainer" class="container-fluid">
<div class="row">

<div class="col-md-12 col-sm-12">
  <span id="headline"></span>
  <span id="names"></span>
  <span id="description"></span>
  <br><br>
  <div>
  <strong>This component contains these variable elements<em>(* marks where your text goes)</em>:</strong>
  <span id="attributes"></span>
  </div>
  <span id="variable-text-slot"></span>
  <span id="code"></span>
</div>
</div>
<hr/>
</div> 

`;

//initializing our class
class DocElement extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, DocElementTemplate);

    createComponentFromSlot(this, 'headline');
    createComponentFromSlot(this, 'code');
    createComponentFromSlot(this, 'names');
    createComponentFromSlot(this, 'attributes');
    createVariableComponents(this, 'attributes');
    createComponentFromSlot(this, 'description');
    createVariableComponents(this, 'variable-text-slot');
    // createComponentFromSlot(this, 'img');

  }
}
window.customElements.define('doc-element', DocElement);














