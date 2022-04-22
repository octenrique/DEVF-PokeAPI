function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => showPokemon(data))
    .catch((err) => console.log(err));
}

const showPokemon = (data) => {
  pokeName = data.name;
  pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`;
  pokeImage = data.sprites["front_default"];
  console.log(pokeName);
  console.log(pokeAbilities);
  console.log(pokeImage);
};

fetchPokemon(1);

module.exports = { fetchPokemon };
