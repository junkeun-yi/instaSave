meta_tag = document.querySelector("meta[property='og:image']");
if(meta_tag != null){
  img_src = meta_tag.getAttribute("content");
  window.open(img_src);
}
