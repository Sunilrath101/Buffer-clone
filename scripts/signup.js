let cb = document.querySelector("#checkbox");
cb.addEventListener("click", checkbox);
let cb_value = document.querySelector("#checkbox");
let users = JSON.parse(localStorage.getItem("bufferCredentials")) || [];
let login_flag = false;
function checkbox() {
  cb_value = document.querySelector("#checkbox");
  if (cb_value.value === "no") {
    document.querySelector("#checkbox").value = "yes";
    console.log(cb_value.value);
    // signup();
  } else if (cb_value.value == "yes") {
    document.querySelector("#checkbox").value = "no";
    console.log(cb_value.value);
    // funct();
  }
}
function signup() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email) {
      login_flag = true;
      break;
    }
  }
  if (email == "" || password == "") {
    alert("Kindly enter Email or Password");
  } else {
    if (cb_value.value == "no") {
      alert(`Kindly CHECK  "I'm not a robot" `);
    } else {
      if (login_flag == true) {
        alert("You have already an account");
      } else {
        let obj = {
          email,
          password,
        };
        users.push(obj);
        localStorage.setItem("bufferCredentials", JSON.stringify(users));
        window.location.href = "login.html";
      }
    }
  }
}
