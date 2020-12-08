const audioElement = document.querySelector("audio");
const prevBtn = document.getElementById("pre");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if Plying
let isPlaying = false;

// Play

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "pause");
  audioElement.play();
}

// Pause

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "play");
  audioElement.pause();
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
