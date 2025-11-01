document.getElementById("loginBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "" || password === "") {
      alert("Please enter both email and password");
    } else {
      alert(alert(Welcome, `${email}`));
    }
});