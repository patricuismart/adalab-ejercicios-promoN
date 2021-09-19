const buton = document.querySelector('.js-search');
const input = document.querySelector('.js-input');
function getUserInfo() {
  debugger;
  let user = input.value;
  console.log(user);
  fetch('https://api.github.com/users/' + user)
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector('.js-name');
      userName.innerHTML = data.login;
    });
}

buton.addEventListener('click', getUserInfo);
