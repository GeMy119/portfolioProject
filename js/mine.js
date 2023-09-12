let aboutOffset = $("#about").offset().top;
$(window).scroll(function () {
    let winScroll = $(window).scrollTop();
    if (winScroll >= aboutOffset - 100) {
        $(".navbar").css({
            backgroundColor: "#fff",
            transition: "all,1s",
        })
        $(".navbar a , .navbar-toggler").css({
            color: "#0078ff",
            transition: "all,1s",
        })
        $("#top").fadeIn(500);
    }
    else {
        $(".navbar").css({
            backgroundColor: "transparent",
            transition: "all,1s",
        })
        $(".navbar a ,.navbar-toggler").css({
            color: "fff",
            transition: "all,1s",
        })

        $("#top").fadeOut(500);
    }

})
$("#top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
})
$(".linkOf").click(function () {
    let selectorLink = $(this).attr("href");
    let offsetLink = $(selectorLink).offset().top;
    $("html,body").animate({ scrollTop: offsetLink }, 2000);

})
$(document).ready(function () {
    $("#loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto")
    })
})
$(".navbar-toggler").click(function () {
    $(".navbar").css({ backgroundColor: "#fff", transition: "all,1s" })
    $(".navbar a ,.navbar-toggler").css({
        color: "#0078ff",
        transition: "all,1s",
    })

})