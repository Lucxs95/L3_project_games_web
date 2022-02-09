$("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    $("#overlay").toggleClass("open");
});

$(".overlay-content a").click(function () {
    $("#nav-icon1").toggleClass("open");
    $("#overlay").toggleClass("open");
});