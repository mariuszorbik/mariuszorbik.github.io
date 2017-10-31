'use strict';

var divRodzic = document.getElementById('container');

function changeForward() {

    var ostatniParagraf = divRodzic.children[4];

    var pierwszyParagraf = divRodzic.firstChild;

    divRodzic.insertBefore(ostatniParagraf, pierwszyParagraf);
};

var nowyPrzycisk = document.createElement('button');

var skrypt = document.querySelector('script');

document.body.insertBefore(nowyPrzycisk, skrypt);

var tekstPrzycisku = document.createTextNode('przesuń pierwszy paragraf na koniec');

nowyPrzycisk.appendChild(tekstPrzycisku);

function changeBackward() {

    var pierwszyParagraf = divRodzic.children[0];

    divRodzic.appendChild(pierwszyParagraf);
}

nowyPrzycisk.addEventListener('click', changeBackward);