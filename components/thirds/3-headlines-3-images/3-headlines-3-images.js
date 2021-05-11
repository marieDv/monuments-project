// IMAGE LEFT TEXT RIGHT
// Attributes: altimg, imgPath, caption, variable text slots


const Thirds3Headlines3ImagesTemplate = document.createElement("template");
Thirds3Headlines3ImagesTemplate.innerHTML = allStyles + `

<style>
#container {
  margin-top: 36px;
}

</style>

<div id="cotainer" class="container-fluid">
<div class="row">

<div class="col-md-4 col-sm-12">
<span id="1-title"></span>
  <span id="1-img"></span>
</div>
<div class="col-md-4 col-sm-12">
<span id="2-title"></span>
  <span id="2-img"></span>
</div>
<div class="col-md-4 col-sm-12">
<span id="3-title"></span>
  <span id="3-img"></span>
</div>

</div>
</div> 

`;

//initializing our class
class Thirds3Headlines3Images extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, Thirds3Headlines3ImagesTemplate);

    createComponentFromSlot(this, '1-title');
    createComponentFromSlot(this, '1-img');
    createComponentFromSlot(this, '2-title');
    createComponentFromSlot(this, '2-img');
    createComponentFromSlot(this, '3-title');
    createComponentFromSlot(this, '3-img');

  }
}
window.customElements.define('thirds-3-headlines-3-images', Thirds3Headlines3Images);














