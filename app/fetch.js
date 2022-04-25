"use strict";

const url = `https://pokeapi.co/api/v2/pokemon/`;
let params = {};

async function fetchPokemon(id) {
  try {
    const response = await fetch(`${url}${id}/`);
    const data = await response.json();
    console.log(data);
    let pokeName = data.name,
      //   // pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`;
      pokeImage = data.sprites["front_default"];
    console.log(pokeName);
    console.log(pokeImage);
  } catch (err) {
    console.log(new Error("It couldn't be possible to connect to the PokeAPI"));
  }
}
fetchPokemon(1);
