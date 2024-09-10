$(document).ready(function () {
    $(".toogle-menu").click(function () {
        $("body").toggleClass("open-nav");
        return false;
    });
    $(".drop-link").click(function () {
        $(this).parent().toggleClass("open");
        return false;
    });
    $(".tabs").tabs();
    $(".section-gallery__slide").gallery({
        oneSlide: true,
        infinite: true,
        switcher: ".switcher > li"
    });
    
    $(".section-choice__gallery").gallery({
        effect: true,
        switcher: ".switcher > li"
    });
    $(".link-scroll").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 62;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.section-list__item .btn').hover(function() {
        $(this).parents('.section-list__item').addClass('hover');
    },
    function() {
        $(this).parents('.section-list__item').removeClass('hover');
    });
    $(".section-region__map-list .link-arrow").on("click", function (event) {
        event.preventDefault();
        if($(this).parent().find('.town-text').hasClass('open')){
            $(this).parent().find('.town-text').removeClass('open');
        }else{
            $('.section-region__map-list .town-text').removeClass('open');
            $(this).parent().find('.town-text').addClass('open');
        }
    });
    $('.section-faq__hold .link-accordion').click(function() {
        event.preventDefault();
        if($(this).parents('.hold-accordion').hasClass('open')){
            $(this).parents('.hold-accordion').removeClass('open');
            $(this).parents('.hold-accordion').find('.box-accordion').slideUp();
            $('.inner-box-accordion').find('.box-accordion').removeClass('open');
        }else{
            $('.section-faq__hold .link-accordion').parent().removeClass('open');
            $('.hold-accordion .box-accordion').slideUp();
            $('.inner-box-accordion').find('.box-accordion').removeClass('open');
            $(this).parents('.hold-accordion').addClass('open');
            $(this).parents('.hold-accordion').find('.box-accordion').slideDown();
            $('.inner-box-accordion').find($(this).attr('href')).addClass('open');
        }
    });
    $('.section-offers__gallery').gallery({
        effect: true,
        oneSlide: true,
        switcher: '.switcher > span',
        onChange: function () {
            var elList = this.elements;
            $.each(elList,function(index,value){
                var el = elList[index];
                $(el).removeClass('my-class');
                $(el).removeClass('next-class');
            });
            $.each(elList,function(index,value){
                if(value.className == 'active'){
                    var elMinus  = elList[index - 1];
                    var elPlus  = elList[(index + 1)];
                    $(elMinus).addClass('my-class');
                    $(elPlus).addClass('next-class');
                    
                    if(index == 0){
                        var number = elList.length - 1;
                        var elMinus1  = elList[number];
                        $(elMinus1).addClass('my-class');
                    }
                    if(index == elList.length - 1){
                        var number2 = 0;
                        var elMinus2  = elList[number2];
                        $(elMinus2).addClass('next-class');
                    }
                }
                
                
            });
        }
    });
         
    $(".btn-mute").on("click", function (event) {
        event.preventDefault();
        var video = $('#video-bg video');
          if ($(video)[0].muted){
            $(video)[0].muted = false;
            $(this).addClass('music-on');
          } else{
            $(video)[0].muted = true;
            $(this).removeClass('music-on');
          }
    });
    initGallery ();
});

function initGallery () {
    var gallReviews = $(".section-reviews__slide").gallery({
        infinite: true,
        flexible: true
    });
    var _resize = function () {
        if($(window).outerWidth() < 1024){
            gallReviews.gallery('destroy');
            gallReviews = $(".section-reviews__slide").gallery({
                infinite: true
            });
        }
        else{
            gallReviews.gallery('destroy');
            gallReviews = $(".section-reviews__slide").gallery({
                infinite: true,
                flexible: true
            });
        }
    }
    _resize();
    $(window).resize(_resize);
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});
