






const timelineTemplate = document.createElement('template');
timelineTemplate.innerHTML = allStyles + `

<style>
#render-timeline-here {
  border: 1px solid black;
}
.vis-item {
  border: pink 5px solid !important;
}
</style>


<div class="container d-flex justify-content-center">


</div>
`;

class Timeline extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });




setTimeout(() => {
 
// DOM element where the Timeline will be attached
var container = document.getElementById("render-timeline-here");

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  { id: 1, content: "item 1\naöskdjaslökdjaklsödjöaskldj", start: "2014-04-20" },
  { id: 2, content: "item 2", start: "2014-04-14" },
  { id: 3, content: "item 3", start: "2014-04-18" },
  { id: 4, content: "item 4", start: "2014-04-16", end: "2014-04-19" },
  { id: 5, content: "item 5", start: "2014-04-25" },
  { id: 6, content: "item 6", start: "2019-04-27", type: "point" },
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

}, 1000);





  }
}

window.customElements.define('horizontal-timeline', Timeline);