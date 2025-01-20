import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  function clearContent() {
    content.innerHTML = "";
  }

  function loadTab(tabFunction) {
    clearContent();
    content.appendChild(tabFunction());
  }

  document
    .getElementById("home")
    .addEventListener("click", () => loadTab(loadHome));
  document
    .getElementById("menu")
    .addEventListener("click", () => loadTab(loadMenu));
  document
    .getElementById("about")
    .addEventListener("click", () => loadTab(loadAbout));

  // Load the home tab by default
  loadTab(loadHome);
});
