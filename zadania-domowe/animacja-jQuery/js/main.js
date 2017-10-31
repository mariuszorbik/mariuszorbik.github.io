'use strict';

function trzeciaAnimacja() {
    
    $('h2').css('opacity', '1');
    
}

function drugaAnimacja() {
    
    $('#kwadratWewnetrzny').animate({
        opacity: 1,
    }, 5000, trzeciaAnimacja);
    
}


$('button').click(function () {
    
    $('#kwadrat').animate({
        width: '100px',
        height: '100px',
        left: '200px',
        marginTop: '240px',
    }, 3000, drugaAnimacja);
    
});