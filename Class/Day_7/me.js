/*
    document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".top-banner form");
    const input = document.querySelector(".top-banner input");
    const msg = document.querySelector(".top-banner .msg");
    const list = document.querySelector(".ajax-section .cities");
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputVal = input.value;

        const listItems = list.querySelectorAll(".ajax-section .city");
    });
    });
    */

//const { response } = require("express");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".top-banner form");
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";
  const input = document.querySelector(".top-banner input");
  const msg = document.querySelector(".top-banner .msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputVal = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => {
        msg.textContent = "Please search for a valid city!";
      });
  });
});
