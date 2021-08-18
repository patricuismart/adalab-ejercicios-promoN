'use strict';
const classWarning = document.querySelector('.warning');
const classError = document.querySelector('.error');
const classSuccess = document.querySelector('.success');
const classContainer = classWarning || classError || classSuccess;
const title = document.querySelector('.js_title');
const text = document.querySelector('.js_text');

if (classContainer.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';
} else if (classContainer.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error';
} else {
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'Los datos son correctos';
}
