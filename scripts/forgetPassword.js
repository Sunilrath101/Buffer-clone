"use strict";
let forgetEmail = false;
let forget_password;

function changeBtnColor() {
  document.querySelector("button").style.backgroundColor = "#1F35B3";
  document.querySelector("button").style.color = "#fff";
  document.querySelector("button").onmouseover = function () {
    document.querySelector("button").style.backgroundColor = "#132484";
  };
  document.querySelector("button").style.backgroundColor = "#1F35B3";
}

function resetPassword() {
  let email = document.querySelector("#forget_email").value;

  let users = JSON.parse(localStorage.getItem("bufferCredentials")) || [];
  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email) {
      forgetEmail = true;
      forget_password = users[i].password;
      break;
    }
  }
  if (email === "") {
    alert("Kindly enter the Email");
  } else if (forgetEmail == false) {
    alert("Kindly enter the correct Email");
  } else if ((forgetEmail = true)) {
    localStorage.setItem("bufferPassword", JSON.stringify(forget_password));
    window.location.href = "showPassword.html";
  }
}
