document.getElementById("buyerSignupButton").addEventListener("click", function () {
  setRoleAndShowForm("buyer");
});

document.getElementById("sellerSignupButton").addEventListener("click", function () {
  setRoleAndShowForm("seller");
});

function setRoleAndShowForm(role) {
  document.getElementById("role").value = role;
  document.getElementById("roleSelection").style.display = "none";
  document.getElementById("signupFormContainer").style.display = "block";
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;

  // Checking if fields are filled
  if (!email || !password || !confirmPassword || !username) {
    alert('Please fill in all fields');
    return;
  }

  // Checking if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Saving user data to localStorage (replace this with actual server call in production)
  localStorage.setItem(email, JSON.stringify({ username, email, password, role }));

  alert('Signup successful! You can now log in.');
  // Optionally, redirect to a login page
  window.location.href = "login.html";
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();
  var username = email.substring(0, email.indexOf('@'));
  document.getElementById('username').value = username;
  document.getElementById('email').value = email;
}