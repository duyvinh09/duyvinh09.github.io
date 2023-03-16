
document.body.insertAdjacentHTML('afterbegin',`
  <div class="heartclick">
  <img src="https://i.imgur.com/ktyR4KN.gif" width="50px" alt="" srcset="">
  </div>
  <style>
.heartclick{
  position: fixed;
  transition: .2s all;
  display: none;
  z-index: 420;
  pointer-events: none;
}
  </style>
`)
window.addEventListener('click', function (e) {
  var hc = document.querySelector('.heartclick');
  hc.style.display = "block";
  hc.style.top = e.y - 20 + 'px';
  hc.style.left = e.x - 25 + 'px';
  setTimeout(() => hc.style.display = "none", 720)
});
