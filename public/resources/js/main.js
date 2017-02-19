'use strict';

//Constants
var loadingAnimationLength = 0;
var scriptsLoaded = {};

function fadeInHtml() {
    $('.content').css({ 'transition-duration': loadingAnimationLength + 's' }).addClass('visible');
    $('body').removeClass('no-scroll');
}

function noScrollBody() {
    $('body').addClass('no-scroll');
}

function currentYear() {
    var currentYear = new Date().getFullYear();
    $('.current-year').text(' ' + currentYear + '. ');
}

$(document).ready(function () {
    noScrollBody();
    currentYear();
    setTimeout(function () {
        fadeInHtml();
    }, loadingAnimationLength * 1000);
});