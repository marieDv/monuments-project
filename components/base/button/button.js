const button = document.createElement('template');
button.innerHTML = allStyles + `
<style>
.button-style {
    //background-color: #048D3B;
    border: none;
    border-radius: 32px;
    padding: 2px 10px;
    margin: 24px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border: 1px solid #048D3B;
    display: block;
}
.button-style:hover {
    border: 1px solid black;
    text-decoration: none;
}
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:active { text-decoration: none; }

</style>
<a id="link" target="_blank" href="">
<button class="button-style">
    <slot name="title"></slot>
</button>
</a>
`;
class Button extends HTMLElement {
  constructor() {
    super();
    setupComponent(this, button);
    this.shadowRoot.getElementById("link").href = this.getAttribute("link");
  }
}

window.customElements.define('button-component', Button);