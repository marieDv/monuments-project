const imgTemplate = document.createElement('template');
imgTemplate.innerHTML = `
<style>
#img {
width: 100%;


color: white;
}
img {
  width: 100%;
}
</style>
<div id="img">
<div>
  <img src="" alt="">
  <p>asdsad</p>
  </div>
</div>
`;

class Img extends HTMLElement {
  constructor(){
    super();

    this.showInfo = true;
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(imgTemplate.content.cloneNode(true));
    
    this.shadowRoot.querySelector('img').src = this.getAttribute('imgPath');
    console.log(this.getAttribute('name'))
    //this.getAttribute('name');
  }
}

window.customElements.define('m-img', Img);