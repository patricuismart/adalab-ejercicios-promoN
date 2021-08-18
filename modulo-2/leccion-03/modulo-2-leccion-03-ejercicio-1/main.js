'use strict';

// // avatar por defecto

const DEFAULT_AVATAR = 'http://placehold.it/300x300';

// // avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

//const userAvatarElement = document.querySelector('.js_user');

//userAvatarElement.innerHTML = `<img src= "${userAvatar}"/> `;

//Segunda parte ejercicio
userAvatar = '';
const userAvatarElement = document.querySelector('.js_user');

console.log(userAvatarElement);
const userChoise = userAvatar || DEFAULT_AVATAR;
userAvatarElement.innerHTML += `<img src="${userChoise}"/>`;
