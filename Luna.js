
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.logo_container, .slogan').css({
        'opacity': ((height - scrollTop) / height)
    });
});


//
// $(window).scroll(function(){
//     $(".fade").css("opacity", 1 - $(window).scrollTop() / 250);
//   });
