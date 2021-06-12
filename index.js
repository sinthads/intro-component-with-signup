function emailValidator(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const form = document.querySelector("form");
const feedbackText = document.querySelector(".feedback-text");
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

const inputs = [firstName, lastName, email, password];

let formIsValid = false;
let isValidationOn = false;

const resetInput = (input) => {
  input.classList.remove("invalid");
  input.nextElementSibling.classList.add("hidden");
};

const invalidateInput = (input) => {
  input.classList.add("invalid");
  input.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  if (!isValidationOn) return;

  inputs.forEach(resetInput);
  formIsValid = true;

  if (!firstName.value) {
    invalidateInput(firstName);
    formIsValid = false;
  }

  if (!lastName.value) {
    invalidateInput(lastName);
    formIsValid = false;
  }

  if (!emailValidator(email.value)) {
    invalidateInput(email);
    formIsValid = false;
  }

  if (!password.value) {
    invalidateInput(password);
    formIsValid = false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();

  if (formIsValid) {
    form.remove();
    feedbackText.classList.remove("hidden");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
