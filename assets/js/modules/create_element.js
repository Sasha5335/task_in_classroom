'use strict';

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
