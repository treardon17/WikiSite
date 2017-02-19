'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimateTitle = function () {
    function AnimateTitle(element) {
        _classCallCheck(this, AnimateTitle);

        this.animationLength = loadingAnimationLength;
        this.element = element;
        this.titles = $(element).find('h1');
        this.title1 = $(element).find('.animate-title-1');
        this.title2 = $(element).find('.animate-title-2');

        for (var i = 0; i < this.titles.length; i++) {
            $(this.titles[i]).css({ 'transition-duration': this.animationLength + 's' });
        }
    }

    _createClass(AnimateTitle, [{
        key: 'whiteTitles',
        value: function whiteTitles() {
            $(this.title1).addClass('animate-title-overlay');
            $(this.title2).addClass('animate-title-overlay');
        }
    }, {
        key: 'blackTitles',
        value: function blackTitles() {
            $(this.title1).removeClass('animate-title-overlay');
            $(this.title2).removeClass('animate-title-overlay');
        }
    }, {
        key: 'showTitles',
        value: function showTitles() {
            $(this.title1).addClass('animate-title-1-visible');
            $(this.title2).addClass('animate-title-2-visible');
        }
    }, {
        key: 'hideTitles',
        value: function hideTitles() {
            $(this.title1).removeClass('animate-title-1-visible');
            $(this.title2).removeClass('animate-title-2-visible');
        }
    }]);

    return AnimateTitle;
}();

$(document).ready(function () {
    var animateTitles = $('.animate-title');

    var _loop = function _loop(i) {
        animateTitles[i] = new AnimateTitle(animateTitles[i]);
        animateTitles[i].showTitles();
        setTimeout(function () {
            animateTitles[i].whiteTitles();
        }, animateTitles[i].animationLength * 1000);
    };

    for (var i = 0; i < animateTitles.length; i++) {
        _loop(i);
    }
});