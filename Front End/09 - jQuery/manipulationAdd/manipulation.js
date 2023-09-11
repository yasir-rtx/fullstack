$(document).ready(function () {
    var price = $("<p>From $399.99</p>");

    // .before => menambahkan elemen sebelum elemen parent
    $(".price1").click(function () {
        $(".vacation").before(price);
    });

    // .after => menambahkan elemen setelah elemen parent
    $(".price2").click(function () {
        $(".vacation").after(price);
    });

    // .prepend => menambahkan elemen sebagai anak pertama
    $(".price3").click(function () {
        $(".vacation").prepend(price);
    });

    //  .append => menambahkan elemen sebagai anak terakhir
    $(".price4").click(function () {
        $(".vacation").append(price);
    });
});
