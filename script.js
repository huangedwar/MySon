var images = document.getElementsByTagName("img");
var dabUrl = chrome.extension.getURL("dab.jpg");


for (var i = 0; i < images.length; i++) {
  var image = images[i];
  image.src = dabUrl;
}