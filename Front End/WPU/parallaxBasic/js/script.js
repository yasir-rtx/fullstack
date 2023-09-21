$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    $("h1").css({
        transform: `translate(0px, ${wScroll / 2}%)`,
    });

    $(".box").css({
        transform: `translate(0px, ${wScroll / 10}%)`,
    });
});
