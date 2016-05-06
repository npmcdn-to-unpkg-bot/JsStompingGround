function slideshow(selector) {
  var items = document.querySelectorAll(selector);
  if(!items || items.length === 0) {
    return;
  }

  var idx = 0;
  var t = setInterval(function() {
    items[idx].style.opacity = 0.0;
    idx++;
    if(idx >= items.length) {
      idx = 0;
    }
    items[idx].style.opacity = 1.0;
  }, 1000);
}

if(window) {
  window.onload = function(e) {
    slideshow('.slideshow .slide');
  };
}
