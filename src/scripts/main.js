'use strict';

const mainImg = document.getElementById('largeImg');
const images = document.getElementById('thumbs');

images.addEventListener('click', (ev) => {
  ev.preventDefault();

  const img = ev.target.closest('.list-item a img');
  const srcValue = img.getAttribute('src');

  mainImg.setAttribute('src', srcValue);
});
