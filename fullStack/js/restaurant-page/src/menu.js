function loadMenu() {
  const content = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  const menuItem1Title = document.createElement("h3");
  menuItem1Title.textContent = "Dish 1";
  const menuItem1Description = document.createElement("p");
  menuItem1Description.textContent = "A flavor of skibiddy toilet";
  menuItem1.appendChild(menuItem1Title);
  menuItem1.appendChild(menuItem1Description);

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  const menuItem2Title = document.createElement("h3");
  menuItem2Title.textContent = "Dish 2";
  const menuItem2Description = document.createElement("p");
  menuItem2Description.textContent = "Baby Gronk infused w/ the Drip King";
  menuItem2.appendChild(menuItem2Title);
  menuItem2.appendChild(menuItem2Description);

  content.appendChild(title);
  content.appendChild(menuItem1);
  content.appendChild(menuItem2);

  return content;
}

export default loadMenu;
