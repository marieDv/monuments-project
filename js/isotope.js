//**isotope

//init Iso
var iso = new Isotope( '.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    year: '.date parseInt',
  }
});




//location
var filterFns = {};

// INITIATE BUTTON GROUP CONTINENT
var filtersElem = document.querySelector('.button-group-continent'); //GET ELEMENTS FROM HTML
filtersElem.addEventListener( 'click', function( event ) { 
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// INITIATE BUTTON GROUP STATUS
var filtersElem = document.querySelector('.button-group-status');
filtersElem.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

//status
var sortByGroup = document.querySelector('.button-group-date');
sortByGroup.addEventListener('click', function ( event ) {
  if ( !matchesSelector( event.target, 'button') ) {
    return;
  }
var sortValue = event.target.getAttribute('.date');
console.log('sorting')
});
//ascending is default (oldest first)
//descending is change (newest first)

// bind filter button click

//date


// interaciton on tiles

// hover to show title of article

//click to open link to individual page
////////////////////////////////////////////////////////////////////////////////////////////////////////
