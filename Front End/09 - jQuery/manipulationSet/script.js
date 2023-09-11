$(document).ready(function () {
    $(".btnText").click(function () {
        $(".lok2").text("Yogyakarta");
    });

    $(".btnHTML").click(function () {
        $(".lok1").html("<em>Bandung</em>");
    });

    $(".btnValue").click(function () {
        $(".input").val(114);
    });
});
