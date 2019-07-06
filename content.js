document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("SaveButton").addEventListener("click", handler);
});

function handler() {
  meta_tag = document.querySelector("meta[property='og:image']");
  if (meta_tag != null) {
    img_src = meta_tag.getAttribute("content");
    window.open(img_src);
  }
}

window.onload = function() {
  meta_tag = document.querySelector("meta[property='og:image']");
  alert('hi')
  if (meta_tag != null) {
    img_src = meta_tag.getAttribute("content");
    alert(img_src);
    window.open(img_src);
  }
}
