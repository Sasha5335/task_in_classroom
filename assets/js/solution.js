'use strict';

const cardContainer = document.getElementById('card');
const cards = responseData.map((place) => createPlaceCards(place));
cardContainer.append(...cards);


function createPlaceCards(place) {
  const h4 = createElement('h4', { classNames: ['card-name'] }, document.createTextNode(`${place.firstName} ${place.lastName}`.trim() || 'Unknown'));
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


