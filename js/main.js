let menu = document.querySelector('header nav .bars');
menu.onclick = function () {
  this.parentElement.classList.toggle('open');
}