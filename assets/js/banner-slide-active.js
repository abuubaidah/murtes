$(document).ready(function(){
    var bannerContent1 = $('.banner-content-slider-1');
    bannerContent1.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000
    });

    jQuery('#banner-content-slider-1').on('translate.owl.carousel', function () {
        jQuery(this).find('.owl-item .banner-content > h1').removeClass('fadeInDown animated').css("opacity","0");
        jQuery(this).find('.owl-item .banner-content > p').removeClass('fadeInUp animated').css("opacity","0");
        jQuery(this).find('.owl-item .banner-content > a').removeClass('fadeInUp animated').css("opacity","0");
    });          
    jQuery('#banner-content-slider-1').on("translated.owl.carousel", function () {
        jQuery(this).find('.owl-item.active .banner-content > h1').addClass('fadeInDown animated').css('opacity','1');
        jQuery(this).find('.owl-item.active .banner-content > p').addClass('fadeInUp animated').css('opacity','1');
        jQuery(this).find('.owl-item.active .banner-content > a').addClass('fadeInUp animated').css('opacity','1');
    });

});

$(document).ready(function(){
    var bannerContent3 = $('.banner-content-slide-3');
    bannerContent3.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000
    });

    jQuery('#banner-content-slide-3').on('translate.owl.carousel', function () {
        jQuery(this).find('.owl-item .banner-content > h1').removeClass('fadeInDown animated').css("opacity","0");
        jQuery(this).find('.owl-item .banner-content > p').removeClass('fadeInUp animated').css("opacity","0");
        jQuery(this).find('.owl-item .banner-content > a').removeClass('fadeInUp animated').css("opacity","0");
    });          
    jQuery('#banner-content-slide-3').on("translated.owl.carousel", function () {
        jQuery(this).find('.owl-item.active .banner-content > h1').addClass('fadeInDown animated').css('opacity','1');
        jQuery(this).find('.owl-item.active .banner-content > p').addClass('fadeInUp animated').css('opacity','1');
        jQuery(this).find('.owl-item.active .banner-content > a').addClass('fadeInUp animated').css('opacity','1');
    });

});