const alerterForm = document.querySelector("#alerter-form");
const alerterText = document.querySelector("#alerter-text");
const sandwichForm = document.querySelector("#sandwich-form");
const createAccount = document.querySelector("#create-account");

alerterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <label>${alerterText.value}</label>
    <input type="checkbox" />
    `;

  sandwichForm.appendChild(newDiv);
});

const haircutForm = document.querySelector("#haircut-form");
const haircutDate = document.querySelector("#haircut-date");
const haircutText = document.querySelector("#haircut-text");
const haircutLong = document.querySelector("#haircut-long");
const haircutShort = document.querySelector("#haircut-short");

haircutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let str =
    "Haircut scheduled for " +
    haircutDate.value +
    "with " +
    haircutText.value +
    "for ";
  if (haircutLong.checked) {
    str += "long hair.";
  } else if (haircutShort.checked) {
    str += "short hair.";
  }
  alert(str);
});

const usernameText = document.querySelector("#username-text");
const emailText = document.querySelector("#email-text");
const passwordText = document.querySelector("#password-text");
const confirmPasswordText = document.querySelector("#confirmpassword-text");

createAccount.addEventListener("submit", function (event) {
  event.preventDefault();

  let str =
    "Thank you for registering " +
    usernameText.value +
    " with e-mail address: " +
    emailText.value +
    " .";
  alert(str);
});
