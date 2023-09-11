$(document).ready(function () {
    $("#keBandung").on("click", function () {
        alert("Saya pergi ke Bandung.");
    });

    $("#hapusBandung").on("click", function () {
        $(".lok1").remove();
        alert("Bandung di hapus :(");
    });
});
