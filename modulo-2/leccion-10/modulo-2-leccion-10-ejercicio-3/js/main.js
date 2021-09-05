const name = document.querySelector

function getUserInfo() {
  fetch('https://api.github.com/users'+ input.value)
    .then((response) => response.json())
    .then((data) => {
      const username = document.querySelector('input');
      username. = loging;
      name = `${username}`;
    });
}
const btn = document.querySelector('.js-search');
btn.addEventListener('click', getUserInfo);
