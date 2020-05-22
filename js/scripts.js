function lazyLoad() {
  var allImages = document.querySelectorAll("img");
  for (var i = 0; i < allImages.length;  i++) {
    allImages[i].setAttribute("loading", 'lazy');
  }
};

lazyLoad();

var openOverlay = document.getElementById("input-modal"),
    overlay = document.getElementById("modal-search"),
    closeOverlay = document.getElementById("close-search");

openOverlay.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.add("active");
})
closeOverlay.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.remove("active");
})