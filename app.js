var commentText = document.getElementById("comment-text");
var commentPreview = document.getElementById("comment-preview");
var btnLarge = document.getElementById("change-size-big");
var btnSmall = document.getElementById("change-size-small");

commentText.addEventListener("keyup", updatePreview);
btnLarge.addEventListener("click", changeSizeBig);
btnSmall.addEventListener("click", changeSizeSmall);

function changeSizeBig() {
  commentPreview.style.fontSize = "40px";
}

function changeSizeSmall() {
  commentPreview.style.fontSize = "10px";
}

function updatePreview() {
  var commentText = event.target.value;
  commentPreview.innerHTML = commentText;
}
