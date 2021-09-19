'use strict';

const citySelect = document.querySelector('.js_city');
const container = document.querySelector('body');

const image = document.createElement('img');
container.appendChild(image);

function cityOptions(event) {
  if (citySelect.value === 'Madrid') {
    image.setAttribute('src', 'https://unsplash.com/photos/x2Or94kjaqo');
  }
}

citySelect.addEventListener('change', cityOptions);
