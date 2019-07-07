This repo is a small Chrome Extension for downloading Instagram pictures.

Instr:
  In order to use it, select a post, click the 3 Dots (...) near the user's name, select 'Go To Post', and the extension will open a new tab with the image, which you can download.

Visual Tutorial:
![Alt text](/README_IMG/page.jpg?raw=true "Title")



Challenges We Faced:
  We tried to implement an onClick event (e.g. when icon is clicked, the image would be opened) but after implementing background.js and using Chrome messaging protocol, we saw that Instagram's graph API blocked a lot of the content monitoring and we were unable to receive the onClick event in the content.js.
