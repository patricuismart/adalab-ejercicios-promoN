const resultsLimit=20;
function getDataFromApi() {
  return fetch(`https://randomuser.me/api/?results=${resultsLimit}`)
    .then((response) => response.json())
    .then((json) => {
      //limpio datos que me llegan Api con el map
      return json.results.map((contact) => {
        return {
          uuid: contact.login.uuid,
          name: contact.name.first + ' ' + contact.name.last,
          photo: contact.picture.medium,
          age: contact.dob.age,
          city: contact.location.city,
          gender: contact.gender,
        };
      });
    });
}
export default getDataFromApi;
