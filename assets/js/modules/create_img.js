'use strict';


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