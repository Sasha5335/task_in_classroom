'use strict';

const cardContainer = document.getElementById('card');
const cards = responseData.map((place) => createPlaceCards(place));
cardContainer.append(...cards);


function createPlaceCards(place) {
	const h4 = createElement('h4', { classNames: ['card-name'] }, document.createTextNode(`${place.firstName} ${place.lastName}` || ''));
	const h5 = createElement('h5', { classNames: ['card-role'] }, document.createTextNode('★' || ''));
	const p = createElement('p', { classNames: ['card-description'] }, document.createTextNode('Fusce dapibus, tellus ac cursus commodo, mauris condimentum nibh, utfermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'));
	const a = createElement('a', { classNames: ['social-link'] });



	const personContent = createElement(
		'div',
		{ classNames: ['card-person-content'] },
		createImageWrapper(place),
		h4,
		h5,
		p
	);

	const personContentSocial = createElement(
		'ul',
		{ classNames: ['social-icons'] },
		createLink(place)
	);

	return createElement('div', { classNames: ['card-person'] }, personContent, personContentSocial);
}


function createImageWrapper(place) {
	const { firstName, id } = place;

	const imageWrapper = document.createElement('div');
	imageWrapper.setAttribute('id', `wrapper${id}`);
	imageWrapper.classList.add('card-img-wrapper');
	imageWrapper.style.backgroundColor = stringToColour(firstName);

	const initialsNamePerson = document.createElement('div');
	initialsNamePerson.classList.add('card-initials');
	initialsNamePerson.append(document.createTextNode(firstName.trim().charAt(0) || ''));

	createImage(place, { className: 'card-img' });

	imageWrapper.append(initialsNamePerson);
	return imageWrapper;
}


function createImage({ firstName, profilePicture, id }, { className }) {
	const img = document.createElement('img');
	img.classList.add(className);
	img.dataset.id = id;
	img.setAttribute('alt', firstName);
	img.setAttribute('src', profilePicture);
	img.addEventListener('error', handleImageError);
	img.addEventListener('load', handleImageLoad);
	return img;
}


function createLink(place) {
	const { contacts } = place;

	const socialLink = document.createElement('li');
	socialLink.classList.add('card-social-link');

	const createLink = document.createElement('a');
	createLink.setAttribute('href', place.contacts[0]);
	createLink.classList.add('card-link');
	socialLink.append(createLink);

	const initialsLinkIcon = document.createElement('span');
	initialsLinkIcon.classList.add('fa');
	initialsLinkIcon.classList.add('fa-facebook');
	createLink.append(initialsLinkIcon);

	return socialLink;
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
function createElement(type, { classNames, onClick }, ...children) {
	const elem = document.createElement(type);
	elem.classList.add(...classNames);
	elem.onclick = onClick;
	elem.append(...children);
	return elem;
}







// const cardContainer = document.getElementById('root');
// const cards = data.map((place) => createPlaceCards(place));
// cardContainer.append(...cards);

// function createPlaceCards(place) {
//    const p = createElement(
//       'p',
//       { classNames: ['cardDescription'] },
//       document.createTextNode(place.description)
//    );

//    const h3 = createElement(
//       'h3',
//       { classNames: ['cardName'] },
//       document.createTextNode(place.name || '')
//    );

//    const article = createElement(
//       'article',
//       { classNames: ['cardContainer'] },
//       createImageWrapper(place),
//       h3,
//       p
//    );

//    return createElement('li', { classNames: ['cardWrapper'] }, article);
// }

// function createImageWrapper(place) {
//    const { name, id } = place;

//    const imageWrapper = document.createElement('div');
//    imageWrapper.setAttribute('id', `wrapper${ id }`);
//    imageWrapper.classList.add('cardImageWrapper');
//    imageWrapper.style.backgroundColor = stringToColour(name);

//    const initials = document.createElement('div');
//    initials.classList.add('initials');
//    initials.append(document.createTextNode(name.trim().charAt(0) || ''));

//    createImage(place, { className: 'cardImage' });

//    imageWrapper.append(initials);
//    return imageWrapper;
// }

// function createImage({ name, profilePicture, id }, { className }) {
//    const img = document.createElement('img');
//    img.classList.add(className);
//    img.dataset.id = id;
//    img.setAttribute('alt', name);
//    img.setAttribute('src', profilePicture);
//    img.addEventListener('error', handleImageError);
//    img.addEventListener('load', handleImageLoad);
//    return img;
// }