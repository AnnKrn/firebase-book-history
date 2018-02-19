// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLTZkkqdTKyYWDG9Clq1I6DjnOfVsPFHQ",
  authDomain: "libro-solucionario.firebaseapp.com",
  databaseURL: "https://libro-solucionario.firebaseio.com",
  projectId: "libro-solucionario",
  storageBucket: "",
  messagingSenderId: "756149319178"
};
firebase.initializeApp(config);
var commentsRef = firebase.database().ref("comments/");
var commentsContainer = document.getElementById("comments-container");

commentsRef.on("child_added", function(snapshot) {
  var commentsData = snapshot.val();
  console.log(commentsData);
  var domElement = createDomCommentFromData(commentsData);
  commentsContainer.insertAdjacentElement("afterbegin", domElement);
});

function createDomCommentFromData(data) {
  var commentContent = data.content;
  var commentDom = document.createElement("section");
  commentDom.innerHTML = commentContent;
  commentDom.className = "comment";
  Object.assign(commentDom.style, data.style);
  return commentDom;
}

var sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", addComment);

function addComment() {
  if (firebase.auth().currentUser) {
    var commentPreview = document.getElementById("comment-preview");
    var newCommentText = commentPreview.innerHTML;
    var newComment = { content: null, style: {} };
    newComment.content = newCommentText;
    Object.assign(newComment.style, commentPreview.style);
    commentsRef.push(newComment);
  } else {
    alert("Logeate");
  }
}

var signIn = document.getElementById("log-in");

signIn.addEventListener("click", signInFunction);

function signInFunction() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

var signOut = document.getElementById("sign-out");
signOut.addEventListener("click", signOutFunction);

function signOutFunction() {
  firebase.auth().signOut();
}

var signOutContainer = document.getElementById("sign-out-container");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    signOutContainer.style.display = "block";
    signIn.style.display = "none";
    sendBtn.disabled = false;
    console.log("logeado");
  } else {
    signIn.style.display = "block";
    signOutContainer.style.display = "none";
    console.log("no logeado");
  }
});
