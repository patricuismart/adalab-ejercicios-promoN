'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar =  <img src='http://www.fillmurray.com/300/300' alt="bill"></img>;

document.querySelector ('.js_user_avatar').innerHTML =  userAvatar;
