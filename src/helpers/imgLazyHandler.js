import "./style.css";

window.addEventListener("load", onLoad);
function onLoad() {
  function lazyImageLoad(e) {
    e.currentTarget.parentNode.classList.remove("lazyImageWaiting");
  }

  function lazyImageError(e) {
    var parent = e.currentTarget.parentNode;
    parent.classList.remove("lazyImageWaiting");
    parent.classList.add("lazyImageError");
    setTimeout(function () {
      parent.classList.add("lazyImageErrorShow");
    }, 60);
  }

  if ("loading" in HTMLImageElement.prototype) {
    var lazyImages = document.querySelectorAll(".lazyImage img");
    console.log("lazyImages", lazyImages);

    for (var img of lazyImages) {
      if (!img.complete) {
        img.parentNode.classList.add("lazyImageWaiting");
        img.addEventListener("load", lazyImageLoad, false);
        img.addEventListener("error", lazyImageError, false);
      }
    }
  } // if 'loading' supported
}
