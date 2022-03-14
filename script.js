var vote_n = 0;
function redirect_a() {
  window.location = "https://searingraptor32.github.io/index.html";
}
function redirect_b() {
  window.location = "https://searingraptor32.github.io/about.html";
}
function upvote() {
  vote_n = vote_n + 1;
  document.getElementById("votes").innerHTML = vote_n + " Votes!"
}
function downvote() {
  vote_n = vote_n - 1;
  document.getElementById("votes").innerHTML = vote_n + " Votes!"
}
