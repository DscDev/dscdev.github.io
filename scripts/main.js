$(function () {

    $activo = $(".active");
    $home = $("#home");
    $about = $("#about");
    $skills = $("#skills");

    $(document).scroll(function () {
        $pos = window.scrollY;
        $alt = window.innerHeight;
        if ($pos < 0.7 * $alt) {
            $home.addClass("active");
            $home.siblings().removeClass("active");
        } else if ($pos >= 0.7 * $alt && $pos < 1.7 * $alt) {
            $about.addClass("active");
            $about.siblings().removeClass("active");

        } else {
            $skills.addClass("active");
            $skills.siblings().removeClass("active");
        }
    });


    $(".bars").click(function () {
        $(".navegacion").toggle();
        changeIcon();

    })

    function changeIcon() {
        $icon = $(".bars").children();
        if ($icon.hasClass("fa-bars")) {
            $icon.removeClass("fa-bars");
            $icon.addClass("fa-times");
        } else {
            $icon.removeClass("fa-times");
            $icon.addClass("fa-bars");
        }
    }

    window.sr = ScrollReveal();
    sr.reveal('.flipper');


});
