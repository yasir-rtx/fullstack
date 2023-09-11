$(document).ready(function () {
    $(".btnText").click(function () {
        console.log($(".lok2").text());
    });

    $(".btnHTML").click(function () {
        console.log($(".lok1").html());
    });

    $(".btnValue").click(function () {
        console.log($(".input").val());
    });
});
