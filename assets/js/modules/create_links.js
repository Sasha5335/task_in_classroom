'use strict';

function createLink({ contacts }) {
  const socialLinks = createElement('ul', { classNames: ['social-icons'] });

  for (const attrValue of contacts) {

    const socialLink = createElement('li');
    socialLinks.append(socialLink);

    const createLink = document.createElement('a');
    createLink.setAttribute('href', attrValue);
    createLink.classList.add('card-link');
    socialLink.append(createLink);

    const initialsLinkIcon = document.createElement('span');
    initialsLinkIcon.classList.add('fa');
    initialsLinkIcon.classList.add(createLinks(attrValue));
    createLink.append(initialsLinkIcon);

  }

  return socialLinks;
}


function createLinks(link) {
  const userLink = new URL(link);

  return foundIcon.get(userLink.hostname);
}



