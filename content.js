alert("Hello from your Chrome extension!")
img_src = document.querySelector("meta[property='og:image']").getAttribute("content");
if (img_src != null){
  window.open(img_src)
}
