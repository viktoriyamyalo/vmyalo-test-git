const overlayRegisterForm = document.getElementById('overlay_register');
const overlayRestorePasswordForm = document.getElementById('overlay_restore');
const sidebar = document.getElementById('burger');
const fontSizeField = document.getElementById('font_size');
const backgroundColorField = document.getElementById('background_color');
const fontFamilyField = document.getElementById('font_family');
const deleteParagraphButton = document.getElementById('delete_paragraph');
const openSignUpButton = document.getElementById('open_register')
const closeSignUpButton = document.getElementById('close_register');
const openRestoreButton = document.getElementById('open_restore');
const closeRestoreButton = document.getElementById('close-restore');
const burger = document.getElementById('burger');

function openRegisterForm() {
  overlayRegisterForm.classList.remove('hidden');
}

function closeSignUpForm() {
  overlayRegisterForm.classList.add('hidden');
}

function openRestorePasswordForm() {
  overlayRestorePasswordForm.classList.remove('hidden');
}

function closeRestorePasswordForm() {
  overlayRestorePasswordForm.classList.add('hidden');
}

function deleteLastParagraph(event) {
  event.preventDefault();
  var paragraphs = document.getElementsByTagName('p');
  paragraphs[paragraphs.length - 1].remove();
}

function changeFontSize() {
  const num = fontSizeField.value;
  const paragraphs = document.getElementsByTagName('p');
  Array.prototype.forEach.call(paragraphs, function(p) {
    p.style.fontSize = num + 'px'
  });
}

function changeBackgroundColor() {
  const color = backgroundColorField.value;
  document.documentElement.style.backgroundColor = color;
}

function changeFontFamily() {
  const font = fontFamilyField.value;
  const paragraphs = document.getElementsByTagName('p');
  Array.prototype.forEach.call(paragraphs, function(p) {
    p.style.fontFamily = font;
  });
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('sidebar-hidden');
}

// Add Event Listeners

// Sign Up Form

openSignUpButton.addEventListener('click', openRegisterForm);
closeSignUpButton.addEventListener('click', closeSignUpForm);

// Restore Password Form

openRestoreButton.addEventListener('click', openRestorePasswordForm);
closeRestoreButton.addEventListener('click', closeRestorePasswordForm);

// Sidebar Functionality

// Open Sidebar

burger.addEventListener('click', toggleSidebar);

// Edit Visuals

fontSizeField.addEventListener('change', changeFontSize);
fontFamilyField.addEventListener('change', changeFontFamily);
backgroundColorField.addEventListener('change', changeBackgroundColor);
deleteParagraphButton.addEventListener('click', deleteLastParagraph);

// Initialize Firebase

(function() {
  const config = {
    apiKey: "AIzaSyCUWWEdoaSo2ospgx5txw_ylkNJe-W_pKY",
    authDomain: "lorem-ipsum-77e48.firebaseapp.com",
    databaseURL: "https://lorem-ipsum-77e48.firebaseio.com",
    projectId: "lorem-ipsum-77e48",
    storageBucket: "",
    messagingSenderId: "680966329623"
  };

  firebase.initializeApp(config);

  // Authorization

const loginEmailField = document.getElementById('auth_login');
const loginPasswordField = document.getElementById('auth_password');
const loginButton = document.getElementById('auth');
const signupEmailField = document.getElementById('register_login');
const signupPasswordField = document.getElementById('register_password');
const repeatPasswordField = document.getElementById('register_confirmation');
const signupButton = document.getElementById('register');
const logoutButton = document.getElementById('logout');
const welcomeContainer = document.getElementById('welcome_container');
const signInForm = document.getElementById('auth_form');
const userName = document.getElementById('user_name');
const sidebar = document.getElementById('sidebar');
const restoreEmailField = document.getElementById('restore_email');
const restoreButton = document.getElementById('restore');

// overlays
// const overlayRegisterForm = document.querySelector('.overlay-sign-up-form');
// const overlayRestorePasswordForm = document.querySelector('.overlay-restore-password-form');

loginButton.addEventListener('click', e => {
  e.preventDefault();
  const email = loginEmailField.value;
  const password = loginPasswordField.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(err => console.log(err.message));
})

signupButton.addEventListener('click', e => {
  
  const email = signupEmailField.value;
  const password = signupPasswordField.value;
  const repeat = repeatPasswordField.value;
  const auth = firebase.auth();

  if(password == repeat) {
    const promise = auth.createUserWithEmailAndPassword(email, password);

     setTimeout( _ => overlayRegisterForm.style.display = "none", 1000);

  // signupEmailField.value = "";
  // signupPasswordField.value = "";

auth.signInWithEmailAndPassword(email, password);
  promise.catch(err => console.log(err.message));
  } else {
    console.log(`Passwords don't match`);
  }  
});

logoutButton.addEventListener('click', e => {
  firebase.auth().signOut();
});

restoreButton.addEventListener('click', e => {
  const email = restoreEmailField.value;
  const promise = firebase.auth().sendPasswordResetEmail(email);
  promise
  .then(console.log('Restore link sent'))
  .catch(e => console.log(e.message));
  
})

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    signInForm.classList.add('hidden');
    userName.innerHTML = `Welcome, ${firebaseUser.email}!`;
    welcomeContainer.classList.remove('hidden');
    sidebar.classList.remove('hidden');

  } else {
    console.log('Not logged in');
    welcomeContainer.classList.add('hidden');
    sidebar.classList.add('hidden');
    signInForm.classList.remove('hidden');
    
  }
});
}());






