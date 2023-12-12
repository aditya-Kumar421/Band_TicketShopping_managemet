const users = {}; // Simulated user database

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Simulating hash-based authentication (not secure for real use)
  const hashedPassword = hashPassword(password);

  // Storing user information securely in the database
  users[username] = {
    email: email,
    password: hashedPassword
  };
  alert('Signup successful!');
  console.log(users);

  // Redirect to login.html after signup
  window.location.href = 'index.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Simulating hash-based authentication (not secure for real use)
  const hashedPassword = hashPassword(password);

  // Checking if the user exists and the password matches
  if (users[username] && users[username].password === hashedPassword) {
    alert('Login successful! Redirecting...');

    // Redirect to index.html after login
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password.');
  }
});

// Simulating hash function
function hashPassword(password) {
  // Simulated hashing using a more secure approach (not fully secure)
  let hash = 0;
  if (password.length === 0) {
    return hash;
  }
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
}
