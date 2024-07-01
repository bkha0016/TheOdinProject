function loadContact() {
    const content = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'You can reach us at: contact@gronkgyattrestaurant.com or call us at (123) 456-7890.';

    content.appendChild(title);
    content.appendChild(contactInfo);

    return content;
}

export default loadContact;
