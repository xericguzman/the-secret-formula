const alerterForm = document.querySelector("#alerter-form");
const alerterText = document.querySelector("#alerter-text");
const sandwichForm = document.querySelector("#sandwich-form");

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
