/*  Javascript */
// const target = document.querySelector("#targetEffect");
// const btn = document.querySelector("#effect");

// btn.addEventListener("click", () => {
//     console.log(target.value);
// });

/*  jQuery */
$(document).ready(function () {
    $("#effect").on("click", function () {
        const target = $("#targetEffect option:selected").val();
        const effect = $("#listEffect option:selected").val();
        const duration = parseInt($("#duration").val()) * 1000;
        console.log(duration);
        // $(target).html(`<strong>${target}</strong>`);
        if (effect === "toggle()") $(target).toggle(duration);
        if (effect === "slideToggle()") $(target).slideToggle(duration);
        if (effect === "fadeToggle()") $(target).fadeToggle(duration);
    });

    $("#animate").on("click", function () {
        const target = $("#targetEffect2 option:selected").val();
        $(target).animate({
            marginLeft: 5,
            opacity: 0.5,
            padding: 10,
            duration: 1000,
        });
    });
});
