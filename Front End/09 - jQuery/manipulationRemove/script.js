$(document).ready(function () {
    // .remove() => menghapus elemen dan elemen childnya
    $(".btnRemove").click(function () {
        $(".lok1").remove();
    });

    // .empty() => menghapus elemen child saja
    $(".btnEmpty").click(function () {
        $(".lok2").empty();
    });
});
