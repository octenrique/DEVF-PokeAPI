import { fetchPokemon } from "/fetch.js";
// const parse = require("fetch.js");

console.log("hola");

//CREATING POKEMONS

function createPokemon(pokemon) {
  //CREA LA CARTA DEL POKEMON
  const card = document.createElement("div");
  card.classList.add("pokemon-thumbnail");

  //CREA UN CONTENEDOR DEL POKEMON
  const loadContainer = document.createElement("div");
  loadContainer.classList.add("img-container");

  //INSERTA LA IMAGEN DE ACUERDO AL POKEMON QUE TOCA
  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;
  loadContainer.appendChild(sprite);

  //MUESTRA EL ID DEL POKEMON
  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  //INSERTA LOS DATOS (IMAGEN Y NUMERO)
  card.appendChild(loadContainer);
  card.appendChild(number);

  //SE AÑADE AL ELEMENTO HTML
  pokePanel.appendChild(card);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);

//SHOWING POKEMON ON LEFT PANEL

function pokeImg(pokemon) {
  const imgContainer = document.querySelector("blue-button__blue-color");
  const pokeImg = document.createElement("img");

  pokeImg.src = pokemon.sprites.front_default;
  pokeButtons.appendChild(imgContainer);
}

pokeButtons.addEventListener("click", () => {
  console.log("hola");
});

module.exports = { createPokemon, createElement, fetchPokemons };
