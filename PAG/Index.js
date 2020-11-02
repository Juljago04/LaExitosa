function home() {
    window.location.href = "Index.html";
}
function scrollto(div) {
    $('html, body').animate({
        scrollTop: $('#' + div).offset().top
    }, 1000);
}