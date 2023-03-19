Window.onload = function () {
  document.getElementById("view").src = "";
};

var img = document.getElementsByTagName("img");
for (var i = 0; i <= img.length; i++) {
  img[i].onclick = function open_modal() {
    document.getElementById("view").src = this.src;
    document.getElementById("box2").style.display = "block";
    document.getElementById("box1").style.width = "59%";
    document.getElementById("box2").style.transition = "5s";
  };
}

function close_modal() {
  document.getElementById("box2").style.display = "none";
  document.getElementById("box1").style.width = "100%";
  document.getElementById("view").src = "";
}
