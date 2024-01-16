const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const envelopeContainer = document.querySelector(".envelope-container");
const closeBtn = document.getElementById("close-btn");
const messageLetter = document.querySelector(".message-letter");
const heartsRow = document.querySelectorAll(".hearts-row");
const heartBtn = document.getElementById("heart-btn");
const audioPlayer = document.getElementById("audioPlayer");
const please = document.getElementById("please");

alert("Javascript is running")

function toggleEnvelope() {
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  envelopeContainer.classList.toggle("open"); // Toggle the "open" class on envelope-container
  please.classList.toggle("no-graphic");
  heartsRow.forEach((element) => element.classList.toggle("animated"));

  if (envelopeContainer.classList.contains("open")) {
    // Play the song
    audioPlayer.play();
  } else {
    // Pause the song
    audioPlayer.pause();
  }
}












