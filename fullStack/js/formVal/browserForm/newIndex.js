"use strict";

require("./styles.css");
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("registration-form");
  var email = document.getElementById("email");
  var country = document.getElementById("country");
  var zip = document.getElementById("zip");
  var password = document.getElementById("password");
  var passwordConfirmation = document.getElementById("password-confirmation");
  var highFiveMessage = document.getElementById("high-five-message");
  var validateEmail = function validateEmail() {
    var emailValue = email.value.trim();
    if (!emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showError(email, "Invalid email format");
      return false;
    }
    showSuccess(email);
    return true;
  };
  var validateCountry = function validateCountry() {
    if (country.value === "") {
      showError(country, "Country is required");
      return false;
    }
    showSuccess(country);
    return true;
  };
  var validateZip = function validateZip() {
    var zipValue = zip.value.trim();
    if (!zipValue.match(/^\d+$/)) {
      showError(zip, "Zip code must be numeric");
      return false;
    }
    showSuccess(zip);
    return true;
  };
  var validatePassword = function validatePassword() {
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
      showError(password, "Password must be at least 8 characters");
      return false;
    }
    showSuccess(password);
    return true;
  };
  var validatePasswordConfirmation = function validatePasswordConfirmation() {
    var passwordValue = password.value.trim();
    var passwordConfirmationValue = passwordConfirmation.value.trim();
    if (passwordValue !== passwordConfirmationValue) {
      showError(passwordConfirmation, "Passwords do not match");
      return false;
    }
    showSuccess(passwordConfirmation);
    return true;
  };
  var showError = function showError(input, message) {
    var errorElement = document.getElementById("".concat(input.id, "-error"));
    input.classList.add("error");
    errorElement.textContent = message;
  };
  var showSuccess = function showSuccess(input) {
    var errorElement = document.getElementById("".concat(input.id, "-error"));
    input.classList.remove("error");
    errorElement.textContent = "";
  };
  var validateForm = function validateForm() {
    var isEmailValid = validateEmail();
    var isCountryValid = validateCountry();
    var isZipValid = validateZip();
    var isPasswordValid = validatePassword();
    var isPasswordConfirmationValid = validatePasswordConfirmation();
    return isEmailValid && isCountryValid && isZipValid && isPasswordValid && isPasswordConfirmationValid;
  };
  email.addEventListener("input", validateEmail);
  country.addEventListener("change", validateCountry);
  zip.addEventListener("input", validateZip);
  password.addEventListener("input", validatePassword);
  passwordConfirmation.addEventListener("input", validatePasswordConfirmation);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      highFiveMessage.textContent = "High five! Form submitted succesfully.";
    } else {
      highFiveMessage.textContent = "";
    }
  });
});
