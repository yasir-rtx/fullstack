$(document).ready(function () {
    // fungsi ready memastika jQuery berjalan setelah DOM selesai dimuat
    // console.log("Hi");
    // $('li').text('Jepang');
    // $(".promo").text("Jepang");
    // $("#destination li").text("Jepang");

    $("button").click(function () {
        // $("#destination > li").css("background-color", "red");
        // $("li").first().css("background-color", "red");
        // $("ul").children().css("background-color", "red");
        $("ul").parent().css("background-color", "red");
    });
});
