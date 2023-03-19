var player = document.getElementById("player");
var ppBlock = document.getElementsByClassName("pBlock");
var text = document.getElementsByClassName("tt");

var playerlist = [
  "a001.mp4",
  "a002.mp4",
  "a003.mp4",
  "a004.mp4",
  "h001.mp4",
  "h002.mp4",
  "h003.mp4",
  "h004.mp4",
  "b001.mp4",
  "b002.mp4",
  "b003.mp4",
  "b004.mp4",
];
var listName = [
  "angry birds blues 01",
  "angry birds blues 02",
  "angry birds blues 03",
  "angry birds blues 04",
  "angry birds blues 05",
  "Hollywood 01",
  "Hollywood 02",
  "Hollywood 03",
  "Hollywood 04",
  "Bollywood 01",
  "Bollywood 0",
  "Bollywood 03",
  "Bollywood 04",
  "Bollywood 05",
];

for (var i = 0; i < ppBlock.length; i++) {
  ppBlock[i].addEventListener("click", (event) => {
    let evt = event.target;
    let sourceVid = evt.getElementsByTagName("source")[0].src;
    player.src = sourceVid;
  });
}

var li = document.getElementsByTagName("li");
var Vtitle = document.getElementsByClassName("videoTitle")[0];
for (let k = 0; k < li.length; k++) {
  li[k].onclick = () => {
    Vtitle.innerHTML = li[k].innerText;
  };
}

function nxtbtn() {
  let thesrc = player.src;
  let cut = thesrc.split("/");
  let lastvalue = cut[cut.length - 1];

  for (let i = 0; i < playerlist.length; i++) {
    if (playerlist[i] == lastvalue) {
      if (playerlist.length != i + 1) {
        document.getElementById("player").src = `v/${playerlist[i + 1]}`;
        // alert(listName[i + 1]);
        Vtitle.innerHTML = listName[i + 1];
      }
    }
  }
}

function prvbtn() {
  let thesrc = player.src;
  let cut = thesrc.split("/");
  let lastvalue = cut[cut.length - 1];

  for (let i = playerlist.length; i > 0; i--) {
    if (playerlist[i] == lastvalue) {
      if (playerlist.length != i - 1) {
        document.getElementById("player").src = `v/${playerlist[i - 1]}`;
        Vtitle.innerHTML = listName[i - 1];
        break;
      }
    }
  }
}

function playVid() {
  var playpause = document.getElementById("pl");
  if (player.paused) {
    player.play();
    playpause.classList.add("fa-pause");
    playpause.classList.remove("fa-play");
  } else {
    player.pause();
    playpause.classList.add("fa-play");
    playpause.classList.remove("fa-pause");
  }
}

function anime_list() {
  document.getElementById("anime").style.display = "block";
  document.getElementById("holly").style.display = "none";
  document.getElementById("bolly").style.display = "none";

  document.getElementById("anime_bar").classList.add("active");
  document.getElementById("holly_bar").classList.remove("active");
  document.getElementById("bolly_bar").classList.remove("active");
}

function holly_list() {
  document.getElementById("holly").style.display = "block";
  document.getElementById("anime").style.display = "none";
  document.getElementById("bolly").style.display = "none";

  document.getElementById("holly_bar").classList.add("active");
  document.getElementById("bolly_bar").classList.remove("active");
  document.getElementById("anime_bar").classList.remove("active");
}

function bolly_list() {
  document.getElementById("holly").style.display = "none";
  document.getElementById("anime").style.display = "none";
  document.getElementById("bolly").style.display = "block";

  document.getElementById("bolly_bar").classList.add("active");
  document.getElementById("anime_bar").classList.remove("active");
  document.getElementById("holly_bar").classList.remove("active");
}

var progressBar = document.getElementById("progress-bar");
player.addEventListener("timeupdate", function () {
  var updateProsBar = player.currentTime / player.duration;
  progressBar.style.width = `${updateProsBar * 100}%`;
  console.log(progressBar.style.width);
});
