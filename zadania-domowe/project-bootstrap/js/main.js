//    scroll menu color change

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('scroll');
        $('.navbar').css({'transition': 'all 0.3s'})
    } else {
        $('.navbar').removeClass('scroll');
    }
});


if ($(window).scrollTop() >= 50) {
    $('.navbar').addClass('scroll');
}

