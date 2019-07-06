alert("Hello from your Chrome extension!")
img_src = document.head.querySelector('[property="og:image"]').content;
if (img_src == null){
  alert("NULL")
}
else{
  popup = window.open();
  popup.document.write(img_src);
}
