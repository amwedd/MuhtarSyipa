// COUNTDOWN
simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 12, // required
  day: 21, // required
  hours: 9, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

//   WISHES
const scriptURL = "https://script.google.com/macros/s/AKfycbzo9gt5FxH48wWXn6XSP2Ycm_GodjmTZF9vpWvg1XQvmMvlW4pzfrOS1eCznDzaHJa_/exec";
const form = document.forms["wishes"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-load");
const myAlert = document.querySelector(".my-alert");
const btnClose = document.querySelector(".btn-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol lodaing, hilangkan tombol kirim
  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnKirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-flex");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

btnClose.addEventListener("click", function () {
  myAlert.classList.toggle("d-flex");
});

// DISABLE SCROLL
// const rootElement = document.querySelector(":root");

// function disableScroll() {
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//   window.onscroll = function () {
//     window.scrollTo(scrollTop, scrollLeft);
//   };

//   rootElement.style.scrollBehavior = "auto";
// }

// function enableScroll() {
//   window.onscroll = function () {};
//   rootElement.style.scrollBehavior = "smooth";
//   playAudio();
// }

// function playAudio() {
//   const song = document.querySelector("#song");
//   song.play();
// }

// AUDIO
function showInvitation() {
  // Sembunyikan cover
  document.getElementById("coverSection").style.display = "none";

  // Tampilkan ikon audio
  document.querySelector(".audio-icon-wrapper i").style.display = "block";

  // Mulai pemutaran musik
  audio.play();
  audio.volume = 0.3;
  body.classList.remove("noscroll");
}

const audio = document.getElementById("song");
const audioIcon = document.getElementById("audioIcon");
const body = document.querySelector("body");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    audioIcon.classList.remove("bi-pause-circle");
    audioIcon.classList.add("bi-disc");
  } else {
    audio.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  }
}
// Tambahkan event listener untuk ikon audio
audioIcon.addEventListener("click", togglePlayPause);

// FITUR COPY TEXT
function copyText(element) {
  /* Get the text content from the sibling with class "copyText" */
  var textToCopy = element.previousElementSibling.innerText;

  /* Create a temporary textarea element to copy the text */
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  /* Select the text in the textarea */
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text to the clipboard */
  document.execCommand("copy");

  /* Remove the temporary textarea */
  document.body.removeChild(tempTextArea);

  /* Provide feedback to the user (optional) */
  alert("Teks berhasil di-copy: " + textToCopy);
}

// NAMA TAMU
const urlParams = new URLSearchParams(window.location.search);
const tamu = urlParams.get("an");

const namaContainer = document.querySelector(".cover h4 span");
namaContainer.innerText = tamu;
