'use strict';

const cardContainer = document.getElementById('card');
const cards = responseData.map((place) => createPlaceCards(place));
cardContainer.append(...cards);


function createPlaceCards(place) {
  const h4 = createElement('h4', { classNames: ['card-name'] }, document.createTextNode(`${place.firstName} ${place.lastName}` || 'Unknown'));
  const h5 = createElement('h5', { classNames: ['card-role'] }, document.createTextNode('★' || ''));
  const p = createElement('p', { classNames: ['card-description'] }, document.createTextNode('Fusce dapibus, tellus ac cursus commodo, mauris condimentum nibh, utfermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'));

  const personContent = createElement(
    'div',
    { classNames: ['card-person-content'] },
    createImageWrapper(place),
    h4,
    h5,
    p
  );

  const personContentSocial = createElement(
    'div',
    { classNames: ['social-icons-wrapper'] },
    createLink(place)
  );

  return createElement('div', { classNames: ['card-person'] }, personContent, personContentSocial);
}


function createImageWrapper(place) {
  const { firstName, lastName, id } = place;

  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', `wrapper${id}`);
  imageWrapper.classList.add('card-img-wrapper');
  imageWrapper.style.backgroundColor = stringToColour(firstName.trim());

  const initialsNamePerson = document.createElement('div');
  initialsNamePerson.classList.add('card-initials');
  initialsNamePerson.append(document.createTextNode(`${firstName.trim().charAt(0)}${lastName.trim().charAt(0)}` || ''));

  createImage(place, { className: 'card-img' });

  imageWrapper.append(initialsNamePerson);

  return imageWrapper;
}


function createImage({ firstName, lastName, profilePicture, id }, { className }) {
  const img = document.createElement('img');

  img.classList.add(className);
  img.dataset.id = id;
  img.setAttribute('alt', `${firstName} ${lastName}`);
  img.setAttribute('src', profilePicture);
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);

  return img;
}


function createLink({ contacts }) {
  const socialLinks = document.createElement('ul');
  socialLinks.classList.add('social-icons');

  for (const attrValue of contacts) {
    const socialLink = document.createElement('li');
    socialLinks.append(socialLink);

    const createLink = document.createElement('a');
    createLink.setAttribute('href', attrValue);
    createLink.classList.add('card-link');
    socialLink.append(createLink);

    const initialsLinkIcon = document.createElement('span');
    initialsLinkIcon.classList.add('fa');
    initialsLinkIcon.classList.add(foundUrl(attrValue));
    createLink.append(initialsLinkIcon);

  }

  return socialLinks;
}


function foundUrl(link) {
  const userLink = new URL(link);

  const foundIcon = new Map()
    .set('www.facebook.com', 'fa-facebook')
    .set('twitter.com', 'fa-twitter')
    .set('www.instagram.com', 'fa-instagram');

  return foundIcon.get(userLink.hostname);
}


/* 
  EVENT HANDLERS
*/
function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}


// /* 
//   UTILS
// */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour;
}


/* 
  LIB
*/
/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(type, { classNames = [], onClick = null } = {}, ...children) {
  const elem = document.createElement(type);

  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);

  return elem;
}
