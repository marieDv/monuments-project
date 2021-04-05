const button = document.createElement('template');
button.innerHTML = allStyles + `
<style>
.button-style {
    background-color: #048D3B; /* Green */
    border: none;
    border-radius: 16px;
    padding: 0px 10px;
    margin: 24px;
    
    text-align: center;
    text-decoration: none;
    display: inline-block;

    font-size: 16px;
    line-height: 32px;
}
.button-style:hover {
    border: 1px solid black;
}
</style>

<button class="button-style">
    <slot name="button-name"> </slot>
</button>
`;

class Button extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(button.content.cloneNode(true));
    this.shadowRoot.querySelector('p.pullquotewithbottommarginvarwidth').innerHTML = this.getAttribute('pull-quote');
    this.shadowRoot.getElementById('variable-column').classList.add(this.getAttribute("colWidth"));
  }
}

window.customElements.define('a-button', Button);