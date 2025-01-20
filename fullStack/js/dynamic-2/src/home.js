function loadHome() {
  const content = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = "Building your own drop-down menu and image carousel";
  const introText = document.createElement("p");
  introText.textContent =
    "learning how to do it through using webpack and multiple modules in the JS framework";

  content.appendChild(title);
  content.appendChild(introText);

  return content;
}

export default loadHome;
