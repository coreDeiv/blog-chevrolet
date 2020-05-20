function lazyLoad() {
  var allImages = document.querySelectorAll("img");
  for (var i = 0; i < allImages.length;  i++) {
    allImages[i].setAttribute("loading", 'lazy');
  }
};

lazyLoad();