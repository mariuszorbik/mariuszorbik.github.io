'use strict';

function changeForward() {

    var ostatniParagraf = $('p:last');

    $('p:first').before(ostatniParagraf);
    
}

var drugiPrzycisk = $('<button></button>').text('przesuń pierwszy paragraf na koniec');

$('body').append(drugiPrzycisk);

$(drugiPrzycisk).click(function () {

    var pierwszyParagraf = $('p:first');

    $('p:last').after(pierwszyParagraf);
    
});