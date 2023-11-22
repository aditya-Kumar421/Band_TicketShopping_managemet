// Login and Sign Up functionality
const loginForm = document.querySelector('#login-form');
const signUpForm = document.querySelector('#signup-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  // Code to check if email and password are correct
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signUpForm.name.value;
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;
  // Code to create a new user account
});
