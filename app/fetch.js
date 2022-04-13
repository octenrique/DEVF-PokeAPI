function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.name);
      console.log(
        `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`
      );
      console.log(data.sprites["front_default"]);
      // createPokemon(data);
    })
    .catch((err) => console.log(err));
}

fetchPokemon(76);

module.exports = { fetchPokemon };
