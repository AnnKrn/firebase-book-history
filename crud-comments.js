var commentsData = {
  contents: {
    0: {
      content: "hola",
      style: {
        color: "red",
        background: "blue"
      }
    },
    1: {
      content: "adios",
      style: {
        color: "white",
        background: "purple"
      }
    }
  }
};

var commentsContainer = document.getElementById("comments-container");

function drawComments() {
  commentsContainer.innerHTML = "";
  for (var i = 0; i < commentsData.length; i++) {
    var sectionDOM = createDomCommentFromData(commentsData[i]);
    commentsContainer.appendChild(sectionDOM);
  }
}

function createDomCommentFromData(data) {
  var commentContent = data.content;
  var commentDom = document.createElement("section");
  commentDom.innerHTML = commentContent;
  commentDom.className = "comment";
  Object.assign(commentDom.style, data.style);
  return commentDom;
}

drawComments();

function addComment() {
  var commentPreview = document.getElementById("comment-preview");
  var newCommentText = commentPreview.innerHTML;
  var newComment = { content: null, style: {} };
  newComment.content = newCommentText;
  Object.assign(newComment.style, commentPreview.style);
  commentsData.unshift(newComment);
  drawComments();
}
