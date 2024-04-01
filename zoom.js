function fitToWidth() {
  var zoom = window.innerWidth / document.body.scrollWidth;
  document.body.style.zoom = zoom;
}
function fitToHeight() {
  var zoom = window.innerHeight / document.body.scrollHeight;
  document.body.style.zoom = zoom;
}
function fitToA3() {
  document.body.style.zoom = 1;
}