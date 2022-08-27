let users = JSON.parse(localStorage.getItem("bufferCredentials")) || [];
let login_check = false;
function login() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].password) {
      login_check = true;
      break;
    }
  }

  if (login_check) {
    window.location.href = "onboarding.html";
  } else if (email == "" || password == "") {
    alert("kindly enter all details");
  } else if (!login_check) {
    alert("kindly enter all details currently");
  }
}
