alert("Hello from your Chrome extension!")
img_src = document.querySelector("meta[property='og:image']").getAttribute("content");
window.open(img_src)
