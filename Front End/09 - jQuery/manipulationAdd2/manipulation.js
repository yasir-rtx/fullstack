$(document).ready(function () {
    var jogja = $("<li>Yogyakarja</li>");
    var bali = $("<li>Bali</li>");

    $(".btn1").click(function () {
        $(".lokasi").prepend(jogja);
    });
    $(".btn2").click(function () {
        $(".lokasi").append(bali);
    });
});
