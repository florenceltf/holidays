var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

$("#img-01").mousemove(function (event) {
    $("#cursor-img-01").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-02").mousemove(function (event) {
    $("#cursor-img-02").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-03").mousemove(function (event) {
    $("#cursor-img-03").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-04").mousemove(function (event) {
    $("#cursor-img-04").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-05").mousemove(function (event) {
    $("#cursor-img-05").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-06").mousemove(function (event) {
    $("#cursor-img-06").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-07").mousemove(function (event) {
    $("#cursor-img-07").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

$("#img-08").mousemove(function (event) {
    $("#cursor-img-08").css(
        "transform",
        "translate3d(" + (event.clientX) + "px," + (event.clientY) + "px,0px)"
    )
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(".cursor").css("display", "none");
};
