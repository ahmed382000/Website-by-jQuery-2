// Trigger the nicescroll plugin
$("body").niceScroll({
    cursorcolor: "#f7600e",
    cursorwidth: "10px",
    cursorborder: 'none',
    zindex: 100000,
    cursorfixedheight: 120
});

// To make the background height = the window height
$('header').height($(window).height());
$(window).resize(function () {
    $('header').height($(window).height());
});

// To make the arrow in the header move the page to Features
$('header .arrow').click(function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.features').offset().top
    }, 750)
});

// To make the arrow in the header move the page to Our Team
$('header .hire').click(function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.ourteam').offset().top + 1
    }, 1750)
});

// To make the arrow in the header move the page to Our Works
$('header .works').click(function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.ourwork').offset().top
    }, 1000)
});

// To show the additionl images and hide them
$('.ourwork .show').click(function (e) {
    e.preventDefault();
    if ($('.show').text() == 'SHOW MORE') {
        $('.ourwork .hidden').fadeIn(1000);
        $('.show').text('SHOW LESS');
    }
    else {
        $('.ourwork .hidden').fadeOut(700);
        $('.show').text('SHOW MORE');
    }
});

// Testimonials Checking
var leftArrow = $('.testimonials .fa-chevron-left');
var rightArrow = $('.testimonials .fa-chevron-right');

function checkClients() {
    $('.testimonials .box:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
    $('.testimonials .box:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
}
checkClients();

$('.testimonials .fa').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('fa-chevron-right')) {
        $('.testimonials .active').fadeOut(100, function () {
            $(this).removeClass('active').next('.box').addClass('active').fadeIn();
            checkClients();
        })
    }
    else {
        $('.testimonials .active').fadeOut(100, function () {
            $(this).removeClass('active').prev('.box').addClass('active').fadeIn();
            checkClients();
        })
    }
});
