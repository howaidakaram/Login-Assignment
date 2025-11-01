
var signUpForm = document.querySelector(".sign-up");
var signInForm = document.querySelector(".sign-in");
var showSignUp = document.getElementById("showSignUp");
var showSignIn = document.getElementById("showSignIn");
showSignUp.addEventListener("click", () => {
  signInForm.classList.add("hidden");
  signUpForm.classList.remove("hidden");
});

showSignIn.addEventListener("click", () => {
  signUpForm.classList.add("hidden");
  signInForm.classList.remove("hidden");
});


// ===== Login Function =====
document.getElementById("loginBtn").addEventListener("click", () => {
  var email = document.getElementById("loginEmail").value.trim();
  var password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
  } else {
    alert(` Welcome back!\nEmail: ${email}\nPassword: ${password}`);
  }
});

// ===== Sign Up Function =====
document.getElementById("signUpBtn").addEventListener("click", () => {
  var name = document.getElementById("signUpName").value.trim();
  var email = document.getElementById("signUpEmail").value.trim();
  var password = document.getElementById("signUpPassword").value.trim();
  var confirm = document.getElementById("signUpConfirm").value.trim();

  if (!name || !email || !password || !confirm) {
    alert("Please fill in all fields.");
  } else if (password !== confirm) {
    alert("Passwords do not match!");
  } else {
    alert(`Account Created!\nName: ${name}\nEmail: ${email}`);
   
    signUpForm.classList.add("hidden");
    signInForm.classList.remove("hidden");
  }
});
