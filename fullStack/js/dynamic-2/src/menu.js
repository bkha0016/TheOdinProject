// Function to create an element with optional classes and text
const createElement = (tag, { className, text, attributes = {} } = {}) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr])
  );
  return element;
};

// Function to create a link
const createLink = (text, href = "#") =>
  createElement("a", { text, attributes: { href } });

// Function to create a list item
const createListItem = (content, { className } = {}) => {
  const listItem = createElement("li", { className });
  listItem.appendChild(content);
  return listItem;
};

// Function to create a dropdown menu
const createDropdown = (title, items) => {
  const dropbtn = createLink(title, "#");
  dropbtn.className = "dropbtn";

  const dropdownContent = createElement("ul", {
    className: "dropdown-content",
  });
  items.forEach((item) => {
    const link = createLink(item.text, item.href);
    const listItem = createListItem(link);
    dropdownContent.appendChild(listItem);
  });

  const dropdown = createElement("li", { className: "dropdown" });
  dropdown.appendChild(dropbtn);
  dropdown.appendChild(dropdownContent);

  return dropdown;
};

// Function to create a navigation menu
const createNavMenu = (items) => {
  const navMenu = createElement("ul", { className: "dropdown-menu" });
  items.forEach((item) => {
    if (item.dropdown) {
      const dropdown = createDropdown(item.text, item.dropdown);
      navMenu.appendChild(dropdown);
    } else {
      const link = createLink(item.text, item.href);
      const listItem = createListItem(link);
      navMenu.appendChild(listItem);
    }
  });
  return navMenu;
};

// Function to create an element with optional classes and text
const createElement2 = (tag, { className, text, attributes = {} } = {}) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr])
  );
  return element;
};

// Function to create an image element
const createImage = (src, alt = "") =>
  createElement2("img", { attributes: { src, alt } });

// Function to create a button
const createButton = (className, text, onClick) => {
  const button = createElement2("button", {
    className: `carousel-button ${className}`,
    text,
  });
  button.addEventListener("click", onClick);
  return button;
};

// Function to create the image container
const createImageContainer = (images) => {
  const container = createElement2("div", { className: "carousel-images" });
  images.forEach((img, index) => {
    const imageElement = createImage(img.src, img.alt);
    if (index === 0) imageElement.classList.add("active");
    container.appendChild(imageElement);
  });
  return container;
};

// Function to create the carousel
const createCarousel = (images) => {
  let currentIndex = 0;

  const showImage = (index) => {
    const allImages = document.querySelectorAll(".carousel-images img");
    allImages.forEach((img) => img.classList.remove("active"));
    allImages[index].classList.add("active");
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

  const carousel = createElement2("div", { className: "carousel" });
  const imageContainer = createImageContainer(images);
  const nextButton = createButton("next", "›", nextImage);
  const prevButton = createButton("prev", "‹", prevImage);

  carousel.appendChild(prevButton);
  carousel.appendChild(imageContainer);
  carousel.appendChild(nextButton);

  return carousel;
};

// Example usage
const images = [
  { src: "https://via.placeholder.com/600x300?text=Image+1", alt: "Image 1" },
  { src: "https://via.placeholder.com/600x300?text=Image+2", alt: "Image 2" },
  { src: "https://via.placeholder.com/600x300?text=Image+3", alt: "Image 3" },
];

// Example usage
const menuItems = [
  { text: "Home", href: "#" },
  {
    text: "Services",
    dropdown: [
      { text: "Web Development", href: "#" },
      { text: "App Development", href: "#" },
      { text: "SEO", href: "#" },
    ],
  },
  { text: "Contact", href: "#" },
];

function loadMenu() {
  const navMenu = createNavMenu(menuItems);
  document.getElementById("content").appendChild(navMenu);
  const carousel = createCarousel(images);
  document.getElementById("content").appendChild(carousel);
}

export default loadMenu;
