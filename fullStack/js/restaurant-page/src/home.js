function loadHome() {
  const content = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Gronk Gyatt Restaurant";

  const introCard = document.createElement("div");
  introCard.id = "card-1";
  const introTitle = document.createElement("h3");
  introTitle.textContent = "Intro:";
  const introText = document.createElement("p");
  introText.textContent = `From the moment you step into the restaurant, you're greeted with an inviting ambiance that sets the stage for an unforgettable dining experience. The decor is a perfect blend of modern elegance and cozy charm, making it the ideal spot for both intimate dinners and celebratory gatherings.`;
  introCard.appendChild(introTitle);
  introCard.appendChild(introText);

  const serviceCard = document.createElement("div");
  serviceCard.id = "card-2";
  const serviceTitle = document.createElement("h3");
  serviceTitle.textContent = "Service:";
  const serviceText = document.createElement("p");
  serviceText.textContent = `The service is impeccable, with a staff that is attentive, knowledgeable, and genuinely passionate about ensuring every guest has a remarkable visit. They effortlessly balance professionalism with warmth, making you feel both pampered and at ease.`;
  serviceCard.appendChild(serviceTitle);
  serviceCard.appendChild(serviceText);

  const menuCard = document.createElement("div");
  menuCard.id = "card-3";
  const menuTitle = document.createElement("h3");
  menuTitle.textContent = "Menu:";
  const menuText = document.createElement("p");
  menuText.textContent = `The menu is a culinary masterpiece, offering a diverse array of dishes that cater to all tastes. Each plate is a work of art, crafted with the freshest ingredients and presented with flair. From the first bite to the last, every dish bursts with flavor, showcasing the chef's creativity and expertise.`;
  menuCard.appendChild(menuTitle);
  menuCard.appendChild(menuText);

  content.appendChild(title);
  content.appendChild(introCard);
  content.appendChild(serviceCard);
  content.appendChild(menuCard);

  return content;
}

export default loadHome;
