// addClass(namaclass) => menambahkan satu atau leboh class ke elemen yang dipilih
// removeClass(namaclass) => menghapus satu atau lebih class dari elemen yang dipilih
// toggleClass(namaClass) => beralih antara menambakan/menghapus class dari elemen yang dipilih
// css(css dalam bentuk objek) => menetapkan atau mengambalikan nilai atribut style
$(document).ready(function () {
    $("#change").on("click", function () {
        const target = $("#listTarget option:selected").val();
        const color = $("#listColor option:selected").val();
        $(target).removeClass("red");
        $(target).removeClass("green");
        $(target).removeClass("blue");
        $(target).addClass(color);
    });

    $("#css").on("click", function () {
        const target = $("#listTarget2 option:selected").val();
        console.log(target);
        $(target).css({
            marginLeft: 50,
            fontSize: 100,
        });
    });
});
