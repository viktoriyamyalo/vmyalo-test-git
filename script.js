var overlaySignUpForm = document.querySelector('.overlay-sign-up-form');
var overlayRestorePasswordForm = document.querySelector('.overlay-restore-password-form');

function openSignUpForm() {
  overlaySignUpForm.style.display = "block";
}

function closeSignUpForm() {
  overlaySignUpForm.style.display = "none";
}

function openRestorePasswordForm() {
  overlayRestorePasswordForm.style.display = "block";
}

function closeRestorePasswordForm() {
  overlayRestorePasswordForm.style.display = "none";
}

function deleteLastParagraph(event) {
  event.preventDefault();
  var paragraphs = document.getElementsByTagName('p');
  paragraphs[paragraphs.length - 1].remove();
}

function changeFontSize(num) {
  var paragraphs = document.getElementsByTagName('p');
  Array.prototype.forEach.call(paragraphs, function(p) {
    p.style.fontSize = num + 'px'
  });
}

function changeBackgroundColor(color) {
  document.getElementById('main').style.backgroundColor = color;
}

function changeFontFamily(font) {
  var paragraphs = document.getElementsByTagName('p');
  Array.prototype.forEach.call(paragraphs, function(p) {
    p.style.fontFamily = font;
  });
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('sidebar-hidden');
  document.getElementById('main').classList.toggle('main-sidebar-visible');
}

/* making the page responsive */

document.getElementById('sidebar').style.marginTop = document.getElementsByTagName('header')[0].offsetHeight + 'px';