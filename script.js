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