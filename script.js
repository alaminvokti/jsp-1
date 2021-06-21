"use strict";
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");
tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //Guard clause
  if (!clicked) return;

  // Active Tab button
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabContent.forEach((t) => t.classList.remove("operations__content--active"));

  // Active content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
