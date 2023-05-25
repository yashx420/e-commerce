"use strict";

const x = function () {
  console.log(document.querySelector(".search-bar").value);
};

const cart = document.querySelectorAll(".cart");
const sizes = document.querySelectorAll(".sizeBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openMenu = function () {
  var change = document.querySelector(".filterTab");
  var productz = document.querySelector(".products");
  change.style.opacity = "1";
  change.style.left = "0";
  productz.style.left = "20px";
};

const openModal = function () {
  modal.style.opacity = "0.9";
  modal.style.zIndex = "2010";
  overlay.style.opacity = "1";
  overlay.style.zIndex = "2009";
  document.querySelector(".sizes").style.zIndex = "2001";
  document.querySelector(".modal-cart").style.zIndex = "2001";
};

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", openModal);
}

for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function () {
    sizes[i].style.backgroundColor = "green";
    sizes[i].style.color = "white";
  });
}

document.querySelector(".overlay").addEventListener("click", function () {
  modal.style.opacity = "0";
  modal.style.zIndex = "0";
  overlay.style.opacity = "0";
  overlay.style.zIndex = "0";
});

document.querySelector(".close").addEventListener("click", function () {
  modal.style.opacity = "0";
  modal.style.zIndex = "0";
  overlay.style.opacity = "0";
  overlay.style.zIndex = "0";
});

document.querySelector(".search-button").addEventListener("click", x);
document.querySelector(".menu-button").addEventListener("click", openMenu);
