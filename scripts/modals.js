"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = function () {
  console.log("dfjgncfmkgh");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);
document.querySelector("#btnClose").addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

document
  .querySelector("#direct_to_start_page")
  .addEventListener("click", () => {
    window.location.href = "publishing_campaign.html";
  });
