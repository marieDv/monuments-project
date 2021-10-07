// external js: isotope.pkgd.js

function enableIsotope() {
  // for each filters
  $('.filters').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    console.log(buttonGroup)
    // init isotope
    var grid = $buttonGroup.data('target');
    // $(grid).imagesLoaded( function() {
    //   $(grid).isotope({
    //     itemSelector: '.grid-item',
    //     layoutMode: 'packery'
    //   })
    // });

    // button click
    $buttonGroup.on('click', 'button', function () {
      var $this = $(this);
      // filter isotope
      var filterValue = $this.attr('data-filter');
      $(grid).isotope({ filter: filterValue })


      // change selected
      $buttonGroup.find('.active').removeClass('active');
      $this.addClass('active');
console.log($this.target)
      removeFocus("button-group-continent");
      $this.target.classList.add("is-checked");
    });
  });
  function removeFocus(className) {
    let archive = document.getElementsByClassName(className)[0];
    let archiveButtons = archive.querySelectorAll('button');
    console.log(archiveButtons);
    for (let i = 0; i < archiveButtons.length; i++) {
      if (archiveButtons[i].classList.contains('is-checked')) {
        archiveButtons[i].classList.remove('is-checked');
      }

    }
  }
};
enableIsotope();




//**isotope

//init Iso
// var iso = new Isotope('.grid', {
//   itemSelector: '.grid-item',
//   // layoutMode: 'fitRows',
//   getSortData: {
//     year: '.date parseInt',
//   },
//   masonry: {
//     columnWidth: 10,
//     gutter: 5
//   }
// });

//location
// var filterFns = {};

// INITIATE BUTTON GROUP CONTINENT
// var filtersElem = document.querySelector('.button-group-continent'); //GET ELEMENTS FROM HTML
// filtersElem.addEventListener('click', function (event) {
//   if (!matchesSelector(event.target, 'button')) {
//     return;
//   }
//   removeFocus("button-group-continent");
//   event.target.classList.add("is-checked");

//   var filterValue = event.target.getAttribute('data-filter');
//   filterValue = filterFns[filterValue] || filterValue;
//   iso.arrange({ filter: filterValue });

// });

// function removeFocus(className) {
//   let archive = document.getElementsByClassName(className)[0];
//   let archiveButtons = archive.querySelectorAll('button');
//   console.log(archiveButtons);
//   for (let i = 0; i < archiveButtons.length; i++) {
//     if (archiveButtons[i].classList.contains('is-checked')) {
//       archiveButtons[i].classList.remove('is-checked');
//     }

//   }
// }



// INITIATE BUTTON GROUP STATUS
// var filtersElem = document.querySelector('.button-group-status');
// filtersElem.addEventListener('click', function (event) {
//   if (!matchesSelector(event.target, 'button')) {
//     return;
//   }
//   removeFocus("button-group-status");
//   event.target.classList.add("is-checked");

//   var filterValue = event.target.getAttribute('data-filter');
//   filterValue = filterFns[filterValue] || filterValue;
//   iso.arrange({ filter: filterValue });
// });

//status
// var sortByGroup = document.querySelector('.button-group-date');
// sortByGroup.addEventListener('click', function (event) {
//   if (!matchesSelector(event.target, 'button')) {
//     return;
//   }
//   removeFocus("button-group-date");
//   event.target.classList.add("is-checked");
//   var sortValue = event.target.getAttribute('.date');
//   console.log('sorting')
// });










//ascending is default (oldest first)
//descending is change (newest first)

// bind filter button click

//date


// interaciton on tiles

// hover to show title of article

//click to open link to individual page
////////////////////////////////////////////////////////////////////////////////////////////////////////




// var iso = new Isotope('.grid2', {
//   itemSelector: '.grid-item',
//   // layoutMode: 'fitRows',
//   getSortData: {
//     year: '.date parseInt',
//   },
//   masonry: {
//     columnWidth: 10,
//     gutter: 5
//   }
// });

