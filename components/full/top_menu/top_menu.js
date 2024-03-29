//CREATING THE VARIABLE THAT HOLDS THE TEMPLATE
const topMenu = document.createElement("template");


// TEMPLATE FOR OUR COMPONENT
topMenu.innerHTML = allStyles + `
<style>

#top-menu-container {
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  /*background: #ffffff;*/
/*border-bottom: 8px solid #E2FA61;*/
z-index: 9999;
  padding-top: 14px;
  /*-webkit-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.10); 
box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.10);*/
}

a {
  font-size: 14pt;
  cursor: pointer;
  color: #000000;
  font-family: "NotCourierSans", serif;
  text-transform: uppercase;
}

a:hover {
  text-decoration: underline;
}

#logo {
  font-family: "Redaction", serif;
  text-transform: uppercase;
  font-size: 24px;
  width: 20px;
}
#logo img {
  width: 18%;
}
@media only screen and (max-width: 780px) {
  #logo img {
    width: 61%;
  }
}

#itemTwo {
  text-align: right;
  display: inline;
}

  
</style>
  <div id="top-menu-container" class= "container-fluid">
    <div class="row">

      <div id="logo" class= "col-6">    <a class="" href="https://www.theaftermonument.com/"><img src="../../../media/The_AFTER_Monument_Logo_FINAL.gif"></a></div>

      <div class= "col-3 col-md-4"></div>
      <a target="_blank" class= "col-2" id="itemTwo" href="../../../about/about.html">About</a>    
      
    </div>
  </div>
`;

//initializing our class
class TopMenu extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, topMenu);
    if (this.getAttribute("about") === "true") {
      this.shadowRoot.querySelector("#itemTwo").style.display = "none";
    }


  }
}
window.customElements.define('top-menu', TopMenu);


/*
    document.querySelector("a[href='#new-intervention']"

    "a[href='#itemOne']"*/