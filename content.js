var boxes  = document.getElementsByClassName("ls-boxcontent-body contenitore_testata-boxcontent");
for(var i = 0, l = boxes.length; i < l; i++) {
  boxes[i].parentNode.removeChild(boxes[i]);
}
