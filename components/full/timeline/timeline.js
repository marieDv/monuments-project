






const timelineTemplate = document.createElement('template');
timelineTemplate.innerHTML = allStyles + `

<style>
#render-timeline-here {
  border: 1px solid black;
}
.vis-item {
  border: pink 5px solid !important;
}
.img-container {
  border: 2px solid red;
  width: 20px;
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
      var item6 =
        '<strong>Statue gets errected</strong><br><div class="img-container"><img src="./media/car.png"  style="width:48px; height:48px;"></div>';

      var item5 = '<strong>This is the headline</strong><br> <p>This is a much longer text withouth an image</p><span>April 21.</span>'
      // DOM element where the Timeline will be attached
      var container = document.getElementById("render-timeline-here");

      // Create a DataSet (allows two way data-binding)
      var items = new vis.DataSet([
        // { id: 1, content: "item 1\naöskdjaslökdjaklsödjöaskldj", start: "2014-04-20", end:  "2018-04-20"},
        { id: 2, content: "item 2", start: "2015-04-14" },
        { id: 3, content: "item 3", start: "2016-04-18" },
        { id: 4, content: "item 4", start: "2019-04-16" },
        { id: 5, content: item5, start: "2014-04-25" },
        { id: 6, content: item6, start: "2022-04-27" },
      ]);

      // Configuration for the Timeline
      var options = {
        width: '100%',
        height: '500px',
        margin: {
          item: 20
        },
        showCurrentTime: false,
      };

      // Create a Timeline
      var timeline = new vis.Timeline(container, items, options);

    }, 1000);





  }
}

window.customElements.define('horizontal-timeline', Timeline);