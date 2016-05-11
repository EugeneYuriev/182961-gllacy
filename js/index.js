var link = document.querySelector(".feedback");
var popup = document.querySelector(".feedback-popup");
var close = popup.querySelector(".feedback-close-btn");

var form = popup.querySelector("feedback-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-popup-show");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-popup-show");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    console.log("Нужно ввести имя и почту");
  } else {
    localStorage.setItem("name", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-popup-show")) {
      popup.classList.remove("feedback-popup-show");
    }
  }
});
