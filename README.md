This repo is a small Chrome Extension for downloading Instagram pictures.

Instr:
  In order to use it, select a post, click the 3 Dots (...) near the user's name, select 'Go To Post', and the extension will open a new tab with the image, which you can download.

Visual Tutorial:
![](page.png?raw=true "Title")
![](img.png?raw=true "Title")
![](go2post.png?raw=true "Title")
![](post.png?raw=true "Title")
![](download.png?raw=true "Title")


What We Did:
 We found the image within the source code, using tag(og:image) and open a new window of the image (using its img_url). This allows users, even those who are source-code-averse, to be able to download images from Instagram.

Challenges We Faced:
  We tried to implement an onClick event (e.g. when icon is clicked, the image would be opened) but after implementing background.js and using Chrome messaging protocol, we saw that Instagram's graph API blocked a lot of the content monitoring and we were unable to receive the onClick event in the content.js.

Disclaimer:
 We do not support the use of this extension for malicious or otherwise illegal purposes. 
