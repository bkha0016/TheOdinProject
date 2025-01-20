function loadAbout() {
  const content = document.createElement("div");
  const title = document.createElement("h1");

  title.textContent = "Hello There :)";
  const aboutUs = document.createElement("p");
  aboutUs.textContent = "you can visit us on moonki land";

  content.appendChild(title);
  content.appendChild(aboutUs);

  return content;
}

export default loadAbout;
