$(function(){
    $('.gnb li').hover(function(){
        $(this).find('.lnb').stop().slideToggle();
    });
    setInterval(fadeInOut,3000);
});

function fadeInOut(){
    $('.slider .img:eq(0)')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('.slider');
}