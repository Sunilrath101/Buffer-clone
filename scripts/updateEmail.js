let users = JSON.parse(localStorage.getItem("bufferEmail"));
console.log("users:", users);
let emailuser = document.querySelector("#useremail");
emailuser.innerText = users;
emailuser.style.fontSize = "8px";
emailuser.style.color = "gray";
