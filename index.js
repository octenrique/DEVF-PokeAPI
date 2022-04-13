import { createPokemon, createElement, fetchPokemons } from "/.screen.js";

const pokePanel = document.querySelector(".choose-panel__buttons");
const pokeButtons = document.querySelector(".blue-button__blue-color");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let offset = 1;
let limit = 19;

// BUTTONS NEXT PREVIOUS

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

//FETCHING

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      pokeImg(data);
    });
}

function fetchPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

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
