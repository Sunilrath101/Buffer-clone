let password = JSON.parse(localStorage.getItem("bufferPassword"));

document.querySelector("button").addEventListener("click", () => {
  window.location.href = "login.html";
});
document.querySelector("#show_here").innerText = `"${password}"`;
