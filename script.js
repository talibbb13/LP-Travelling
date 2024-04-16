
function fetchRandomImage(topics, width, height) {
    document.querySelectorAll(".randomImage").forEach(function (img, ind, arr) {
        const searchUrl = `https://source.unsplash.com/${width}x${height}/?${topics[ind]}`;
        img.src = searchUrl
    })
}
fetchRandomImage(["trip", "bus", "bus-Travel", "bus-travelling", "luxury-bus"], 300, 400)


document.querySelectorAll("#hero-main img").forEach(function (img, ind) {
    img.addEventListener("click", function () {
        console.log(window.getComputedStyle(img));
        var imgStyle = window.getComputedStyle(img); 
        var curZIndex = parseInt(imgStyle.getPropertyValue("z-index"));
        img.classList.add("fadeOut")
       setTimeout(function() {
        img.classList.remove("fadeOut")
       }, 1000)
        curZIndex -= 1
        img.style.zIndex = curZIndex;
    })
});


