let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");
const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};
const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};
if (darkMode === "enabled") {
  enableDarkMode();
}
;
toggleBtn.onclick = _0x5abex6 => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
let profile = document.querySelector(".header .flex .profile");
document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  search.classList.remove("active");
};
let search = document.querySelector(".header .flex .search-form");
document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
  profile.classList.remove("active");
};
let sideBar = document.querySelector(".side-bar");
document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
  body.classList.toggle("active");
};
document.querySelector("#close-btn").onclick = () => {
  sideBar.classList.remove("active");
  body.classList.remove("active");
};
window.onscroll = () => {
  profile.classList.remove("active");
  search.classList.remove("active");
  if (window.innerWidth < 1200) {
    sideBar.classList.remove("active");
    body.classList.remove("active");
  }
};
const a = document.querySelector(".boxface h3");
const b = document.querySelector(".boxdonhang h3");
const c = document.querySelector(".boxdoitac h3");
const d = document.querySelector(".boxhailong h3");
function counterUp(_0x5abexf, _0x5abex10) {
  let _0x5abex11 = 1000;
  let _0x5abex12 = 0;
  let _0x5abex13 = _0x5abex10 / _0x5abex11;
  const _0x5abex14 = setInterval(function () {
    _0x5abex12 += _0x5abex13;
    if (_0x5abex12 > _0x5abex10) {
      clearInterval(_0x5abex14);
      _0x5abexf.innerText = _0x5abex10;
    } else {
      _0x5abexf.innerText = Math.ceil(_0x5abex12);
    }
  }, 1);
}
counterUp(a, 2793);
counterUp(b, 39729);
counterUp(c, 55);
counterUp(d, 98);
AOS.init({
  duration: 1200
});
