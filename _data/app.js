if (typeof window !== "undefined") {
window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    console.log(window.pageYOffset);

    if (window.pageYOffset < 100){
        let image2 = document.getElementById("rotate2");
        image2.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
    if (window.pageYOffset < 100){
        let image = document.getElementById("rotate1");
        image.style.transform = "rotate(" + -window.pageYOffset/2 + "deg)";
    }
}
}
