//**isotope

//init Iso
var iso = new Isotope( '.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    year: '.year parseInt',
  }
});

//location
var filterFns = {
  //show if in monument is in Country
  continent: function( itemElem ) {
    var continent = 
    itemElem.querySelector('.continent').textContent;
    return continent.match();
  }
}

//status


// bind filter button click

//date


// interaciton on tiles

// hover to show title of article

//click to open link to individual page
////////////////////////////////////////////////////////////////////////////////////////////////////////
