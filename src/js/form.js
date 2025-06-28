"use strict";

document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // отправка на сервер
    console.log("Subscribed with email:", email);
    alert("Thank you for subscribing!");
    this.reset();
  });
