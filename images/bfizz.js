function rotate() {
    var element = document.getElementById("image-aneme");
    element.style.transform = "rotate(360deg)";
    element.style.transition = "transform 2s";
}

function rotatereverse() {
    var element = document.getElementById("image-aneme");
    element.style.transform = "rotate(0deg)";
    element.style.transition = "transform 2s";
}