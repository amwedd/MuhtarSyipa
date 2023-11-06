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

// AUDIO
var audio = document.getElementById("myAudio");

// Minta izin dari pengguna sebelum memainkan musik
document.addEventListener("click", function () {
  if (audio.paused) {
    if (confirm("Do you want to play the music?")) {
      audio.play();
    }
  }
});

// Atur pemutaran musik secara otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  audio.play();
});
