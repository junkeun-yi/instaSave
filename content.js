img_src = document.querySelector("meta[property='og:image']").getAttribute("content");
if (img_src == null){
  alert("Null Image")
  return()
}
window.open(img_src)
