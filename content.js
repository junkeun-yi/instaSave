var meta_tag = document.querySelector("meta[property='og:image']");
  if(!meta_tag){
    alert("Image Not Found T_T")
  }
  else{
    var img_src = meta_tag.getAttribute("content");
    window.open(img_src)
  }
