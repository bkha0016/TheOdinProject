import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const zip = document.getElementById("zip");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("password-confirmation");
  const highFiveMessage = document.getElementById("high-five-message");

  const validateEmail = () => {
    const emailValue = email.value.trim();
    if (!emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showError(email, "Invalid email format");
      return false;
    }
    showSuccess(email);
    return true;
  };

  const validateCountry = () => {
    if (country.value === "") {
      showError(country, "Country is required");
      return false;
    }
    showSuccess(country);
    return true;
  };

  const validateZip = () => {
    const zipValue = zip.value.trim();
    if (!zipValue.match(/^\d+$/)) {
      showError(zip, "Zip code must be numeric");
      return false;
    }
    showSuccess(zip);
    return true;
  };

  const validatePassword = () => {
    const passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
      showError(password, "Password must be at least 8 characters");
      return false;
    }
    showSuccess(password);
    return true;
  };

  const validatePasswordConfirmation = () => {
    const passwordValue = password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim();
    if (passwordValue !== passwordConfirmationValue) {
      showError(passwordConfirmation, "Passwords do not match");
      return false;
    }
    showSuccess(passwordConfirmation);
    return true;
  };

  const showError = (input, message) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.add("error");
    errorElement.textContent = message;
  };

  const showSuccess = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove("error");
    errorElement.textContent = "";
  };

  const validateForm = () => {
    const isEmailValid = validateEmail();
    const isCountryValid = validateCountry();
    const isZipValid = validateZip();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmationValid = validatePasswordConfirmation();
    return (
      isEmailValid &&
      isCountryValid &&
      isZipValid &&
      isPasswordValid &&
      isPasswordConfirmationValid
    );
  };

  email.addEventListener("input", validateEmail);
  country.addEventListener("change", validateCountry);
  zip.addEventListener("input", validateZip);
  password.addEventListener("input", validatePassword);
  passwordConfirmation.addEventListener("input", validatePasswordConfirmation);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      highFiveMessage.textContent = "High five! Form submitted succesfully.";
    } else {
      highFiveMessage.textContent = "";
    }
  });
});
