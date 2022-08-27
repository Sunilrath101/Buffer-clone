
  let emailSent = document.getElementById("emailSent");
  let enterOTP = document.getElementById("enterOtp");

  function otpSent() {
    let enteredEmail = document.getElementById("email").value;
    let emptyMail = document.getElementById("empty");
    if (enteredEmail == "") {
      emptyMail.style.display = "block";
    } else {
      emailSent.style.display = "none";
      enterOTP.style.display = "block";
    }
  }

  function otpEntered() {
    let inputOTP = document.getElementById("otp").value;
    let wrongAlert = document.getElementById("wrong");
    let subBtn = document.getElementById("subBtn");
    let veriBtn = document.getElementById("veriBtn");

    if (inputOTP == 911009) {
      subBtn.style.display = "none";
      veriBtn.style.display = "block";
      setInterval(function () {
        emailSent.style.display = "none";
        enterOTP.style.display = "none";
        window.location.assign("analytics-dash.html");
      }, 2000);
    } else {
      wrongAlert.style.display = "block";
    }
  }

  // function passReseted() {
  //   let newPass = document.getElementById("new-pass").value;
  //   let confirmPass = document.getElementById("confirm-pass").value;
  //   let notMatch = document.getElementById("notMatch");

  //   if (newPass != confirmPass) {
  //     notMatch.style.display = "block";
  //   } else {
  //     alert("Password reseted successfully");
  //   }
  // }
