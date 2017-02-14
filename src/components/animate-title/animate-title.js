class AnimateTitle{
    constructor(element){
        this.animationLength = loadingAnimationLength;
        this.element = element;
        this.titles = $(element).find('h1');
        this.title1 = $(element).find('.animate-title-1');
        this.title2 = $(element).find('.animate-title-2');

        for(let i = 0; i < this.titles.length; i++){
            $(this.titles[i]).css({'transition-duration': this.animationLength + 's'});
        }
    }

    whiteTitles(){
        $(this.title1).addClass('animate-title-overlay');
        $(this.title2).addClass('animate-title-overlay');
    }

    blackTitles(){
        $(this.title1).removeClass('animate-title-overlay');
        $(this.title2).removeClass('animate-title-overlay');
    }

    showTitles(){
        $(this.title1).addClass('animate-title-1-visible');
        $(this.title2).addClass('animate-title-2-visible');
    }

    hideTitles(){
        $(this.title1).removeClass('animate-title-1-visible');
        $(this.title2).removeClass('animate-title-2-visible');
    }
}

$(document).ready(()=>{
    let animateTitles = $('.animate-title');
    for(let i = 0; i < animateTitles.length; i++){
        animateTitles[i] = new AnimateTitle(animateTitles[i]);
        animateTitles[i].showTitles();
        setTimeout(()=>{
            animateTitles[i].whiteTitles();
        }, animateTitles[i].animationLength * 1000);
    }
});