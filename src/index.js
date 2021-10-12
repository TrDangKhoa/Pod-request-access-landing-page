import "normalize.css";
import "./styles/index.scss";

document.getElementById("request-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
const sumbitBtn = document.getElementsByClassName("btn-submit")[0];
const field = document.getElementsByClassName("field")[0];
const errorMessages = document.getElementsByClassName("error-messages")[0];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
sumbitBtn.addEventListener("click", (e) => {
  if (!field.value || !field.value.match(emailRegex)) {
    console.log("remove");
    errorMessages.classList.remove("hidden");
    if (!field.value) errorMessages.innerText = "Oops! Please add your email";
    else if (!field.value.match(emailRegex)) {
      errorMessages.innerText = "Oops! Please check your email";
    }
    return;
  } else {
    errorMessages.classList.add("hidden");
  }
});
