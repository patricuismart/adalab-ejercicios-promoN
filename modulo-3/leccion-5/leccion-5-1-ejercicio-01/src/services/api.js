// Fichero src/services/api.js
const callToApi = (searchName) => {
  // Llamamos al API
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde el API podemos limpiar los datos aquí
      const shows = response.map((data) => {
        return {
          name: data.show.name,
        };
      });
      return shows;
    });
};

export default callToApi;
