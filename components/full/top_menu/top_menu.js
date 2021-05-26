//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const topMenu = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
topMenu.innerHTML = allStyles + `
<style>

#top-menu-container {
  position:fixed;
  top: 10px;
}

a {
  font-size: 14pt;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

  
</style>
  <div id="top-menu-container" class= "container-fluid">
    <div class="row">
      <div class= "col-7"></div>
      <a class= "col-1" id="itemOne" href=""></a>
      <a class= "col-1" id="itemTwo" href=""></a>
      <a class= "col-1" id="itemThree" href=""></a>
      <a class= "col-1" id="itemFour" href=""></a>
      <div class= "col-1"></div>
    </div>
  </div>
`;

//initializing our class
class TopMenu extends HTMLElement {
  constructor() {
    super();
    setupComponent(this,topMenu);

    this.shadowRoot.querySelector('#itemOne').innerText = this.getAttribute("itemOneName");
    this.shadowRoot.querySelector('#itemTwo').innerText = this.getAttribute("itemTwoName");
    this.shadowRoot.querySelector('#itemThree').innerText = this.getAttribute("itemThreeName");
    this.shadowRoot.querySelector('#itemFour').innerText = this.getAttribute("itemFourName");

    this.shadowRoot.querySelector('#itemOne').href = this.getAttribute("linkOne");
    this.shadowRoot.querySelector('#itemTwo').href = this.getAttribute("linkTwo");
    this.shadowRoot.querySelector('#itemThree').href = this.getAttribute("linkThree");
    this.shadowRoot.querySelector('#itemFour').href = this.getAttribute("linkFour");

    
  }
}
window.customElements.define('top-menu', TopMenu);


/*
    document.querySelector("a[href='#new-intervention']"

    "a[href='#itemOne']"*/