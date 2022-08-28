let users = JSON.parse(localStorage.getItem("bufferEmail"));
console.log("users:", users);

// function updateee(users) {

// }
// updateee(users);

setTimeout(() => {
  let emailuser = document.querySelector("#useremail");
  emailuser.innerText = users;
  emailuser.style.fontSize = "8px";
  emailuser.style.color = "gray";

  // emailuser.append(pera);
}, 500);
