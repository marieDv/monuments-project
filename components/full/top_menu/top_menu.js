//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const topMenu = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
topMenu.innerHTML = allStyles + `
<style>

#top-menu-container {
  position:fixed;
  top: 0;
  height: 100px;
  background: #E2FA61;
  -webkit-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.73); 
box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.73);
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
      <div class= "col-2"></div>
      <a class= "col-2" id="itemOne" href=""></a>
      <a class= "col-2" id="itemTwo" href=""></a>
      <a class= "col-2" id="itemThree" href=""></a>
      <a class= "col-2" id="itemFour" href=""></a>
      <div class= "col-2"></div>
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