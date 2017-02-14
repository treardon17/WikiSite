//Constants
const loadingAnimationLength = 0;
let scriptsLoaded = {};

function fadeInHtml(){
    $('.content').css({'transition-duration': loadingAnimationLength + 's'}).addClass('visible');
    $('body').removeClass('no-scroll');
}

function noScrollBody(){
    $('body').addClass('no-scroll');
}

function currentYear(){
    let currentYear = new Date().getFullYear();
    $('.current-year').text(' ' + currentYear + '. ')
}

$(document).ready(()=>{
    noScrollBody();
    currentYear();
    setTimeout(() => {
        fadeInHtml();
    }, loadingAnimationLength * 1000)
});