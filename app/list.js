import { fetchPokemon } from "./fetch";
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const limit = 20;
const offset = 1;

function fetchPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    console.log(i);
    fetchPokemon(i);
  }
}

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 19;
    removeChildNodes(pokePanel);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 19;
  removeChildNodes(pokePanel);
  fetchPokemons(offset, limit);
});

fetchPokemons(offset, limit);

module.exports = { fetchPokemons };
