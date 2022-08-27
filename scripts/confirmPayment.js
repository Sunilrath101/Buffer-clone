"use strict";
//modals1
const modal1 = document.querySelector(".modal1");
const overlay1 = document.querySelector(".overlay1");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnsOpenModal1 = document.querySelector(".show-modal1");

const openModal1 = function () {
  console.log("dfjgncfmkgh");
  modal1.classList.remove("hidden1");
  overlay1.classList.remove("hidden1");
};

const closeModal1 = function () {
  modal1.classList.add("hidden1");
  overlay1.classList.add("hidden1");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnsOpenModal1.addEventListener("click", openModal1);

btnCloseModal1.addEventListener("click", closeModal1);
overlay1.addEventListener("click", closeModal1);
// document.querySelector("#btnClose").addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden1")) {
    closeModal1();
  }
});

// above modals1
//
//
//
//

//modals2
const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnsOpenModal2 = document.querySelector(".show-modal2");

const openModal2 = function () {
  console.log("dfjgncfmkgh");
  modal2.classList.remove("hidden2");
  overlay2.classList.remove("hidden2");
  modal1.classList.add("hidden1");
  overlay1.classList.add("hidden1");
};

const closeModal2 = function () {
  modal2.classList.add("hidden2");
  overlay2.classList.add("hidden2");
  modal1.classList.remove("hidden1");
  overlay1.classList.remove("hidden1");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnsOpenModal2.addEventListener("click", openModal2);

btnCloseModal2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);
// document.querySelector("#btnClose").addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal2.classList.contains("hidden2")) {
    closeModal2();
  }
});
//go back
document.querySelector(".back>p").addEventListener("click", closeModal2);

// above modals
let count;
let drease = document.querySelector("#drease");
let increase = document.querySelector("#increase");
let input = document.querySelector("#number");
let updatePlaninSummary = document.querySelector("#updatePlaninSummary");
let channelsChange = document.querySelector("#channelsChange");
let userQuantityChange = document.querySelector("#userQuantityChange");
let userQuantityChange1 = document.querySelector("#userQuantityChange1");
let lastPayment = document.querySelector(".lastPayment");
let finalamount1 = document.querySelector(".finalamount1");
let finalamount2 = document.querySelector(".finalamount2");

checkThree();
drease.addEventListener("click", () => {
  let inputValue = +input.value;
  inputValue--;
  if (inputValue == 0) {
    inputValue = 1;
  }
  document.querySelector("#number").value = inputValue;
  let ans = count * Number(input.value);
  lastPayment.innerText = 12 * ans;
  finalamount1.innerText = `$ ${ans} `;
  finalamount2.innerText = `$ ${ans} `;
});
increase.addEventListener("click", () => {
  let inputValue = +input.value;
  inputValue++;
  document.querySelector("#number").value = inputValue;
  let ans = count * Number(input.value);
  lastPayment.innerText = 12 * ans;
  finalamount1.innerText = `$ ${ans} `;
  finalamount2.innerText = `$ ${ans} `;
});

document.querySelector("#check3").addEventListener("click", () => {
  checkThree();
});

function checkThree() {
  changecheck("#check3", "#check2", "#check1");
  channelsChange.innerText = "2";
  userQuantityChange.innerText = "Unlimited users";
  userQuantityChange1.innerText = "Unlimited users";
  let ans = 12 * +input.value;
  lastPayment.innerText = 12 * ans;
  finalamount1.innerText = `$ ${ans} `;
  finalamount2.innerText = `$ ${ans} `;
  count = 12;
}
document.querySelector("#check2").addEventListener("click", () => {
  changecheck("#check2", "#check3", "#check1");
  channelsChange.innerText = "2";
  userQuantityChange.innerText = "One user";
  userQuantityChange1.innerText = "One user";
  let ans = 6 * +input.value;
  lastPayment.innerText = 12 * ans;
  finalamount1.innerText = `$ ${ans} `;
  finalamount2.innerText = `$ ${ans} `;
  count = 6;
});
document.querySelector("#check1").addEventListener("click", () => {
  changecheck("#check1", "#check2", "#check3");
  channelsChange.innerText = "3";
  userQuantityChange.innerText = "One user";
  userQuantityChange1.innerText = "One user";
  finalamount1.innerText = "$0";
  finalamount2.innerText = "$0";
  count = 0;
  lastPayment.innerText = 12 * count;
});

function changecheck(a, b, c) {
  document.querySelector(a).style.color = "rgb(44, 75, 255)";
  document.querySelector(b).style.color = "gray";
  document.querySelector(c).style.color = "gray";
}

//form input checking
let form = document.querySelector("form");
let creditCard = document.querySelector("#creditCard");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let cvv = document.querySelector("#cvv");
document.querySelector(".checkout").addEventListener("click", () => {
  checkcreditcardinput();
});

function checkcreditcardinput() {
  if (creditCard.value != "1234567891234567") {
    creditCard.style.backgroundColor = "rgba(255, 196, 196,.4)";
    creditCard.style.color = "red";
  }
  if (month.value != "11") {
    month.style.backgroundColor = "rgba(255, 196, 196,.4)";
    month.style.color = "red";
  }
  if (year.value != "28") {
    year.style.backgroundColor = "rgba(255, 196, 196,.4)";
    year.style.color = "red";
  }
  if (cvv.value != "748") {
    cvv.style.backgroundColor = "rgba(255, 196, 196,.4)";
    cvv.style.color = "red";
  }
  if (
    month.value == "11" &&
    creditCard.value == "1234567891234567" &&
    year.value == "28" &&
    cvv.value == "748"
  ) {
    window.location.href = "paymentSetTimeout.html";
  }
}

let allInput = document.querySelectorAll("input");
for (let i = 0; i < allInput.length; i++) {
  allInput[i].addEventListener("click", () => {
    defualtbackgrpundColor();
  });
}
function defualtbackgrpundColor() {
  month.style.backgroundColor = "#fff";
  month.style.color = "black";
  year.style.backgroundColor = "#fff";
  year.style.color = "black";
  creditCard.style.backgroundColor = "#fff";
  creditCard.style.color = "black";
  cvv.style.backgroundColor = "#fff";
  cvv.style.color = "black";
}
