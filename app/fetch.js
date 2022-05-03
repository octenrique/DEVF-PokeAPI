"use strict";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const URL2 = `https://pokeapi.co/api/v2/ability/`;
const POKE_GRID = document.querySelector(".choose-panel__button");
const PREVIOUS = document.querySelector(".choose-panel__previous");
const NEXT = document.querySelector(".choose-panel__next");

let offset = 1;
let limit = 20;

//* Buttons pagination

const removeChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

PREVIOUS.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 19;
    removeChildNodes(POKE_GRID);
    getPokemon(offset, limit);
  }
});

NEXT.addEventListener("click", () => {
  offset += 19;
  removeChildNodes(POKE_GRID);
  fetchPokemons(offset, limit);
});

//* Fetching the API

async function getPokemon(id = 1) {
  let pokedexName = document.querySelector(".header__APIValue-name");
  let pokedexType = document.querySelector(".header__APIValue-type");
  let pokedexImg = document.querySelector(".poke-image__image");
  try {
    const response = await fetch(`${URL}${id}/`);
    const data = await response.json();

    let pokeName = data.name,
      pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`,
      pokeImage = data.sprites["front_default"];

    pokedexName.innerHTML = `<p><b>${pokeName}</b></p>`;
    pokedexType.innerHTML = `<p><b>${pokeAbilities}</b></p>`;
    pokedexImg.src = pokeImage;

    createPokemon(data);
    createImages(data);
  } catch (err) {
    console.log(new Error("It couldn't be possible to connect to the PokeAPI"));
  }
}

const limitPokemons = (offset, limit) => {
  for (let i = offset; i <= offset + limit; i++) {
    // console.log(i);
    getPokemon(i);
  }
};

//* Creating Pokemon

const createPokemon = (data) => {
  let pokedexName = document.querySelector(".header__APIValue-name");
  let pokedexType = document.querySelector(".header__APIValue-type");
  let pokedexImg = document.querySelector(".poke-image__image");

  let pokeName = data.name,
    pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`,
    pokeImage = data.sprites["front_default"];

  pokedexName.innerHTML = `<p><b>${pokeName}</b></p>`;
  pokedexType.innerHTML = `<p><b>${pokeAbilities}</b></p>`;
  pokedexImg.src = pokeImage;
};

//* Showing in the list panel

function createImages(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-thumbnail");

  const loadContainer = document.createElement("div");
  loadContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;
  loadContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  card.appendChild(loadContainer);
  card.appendChild(number);

  pokePanel.appendChild(card);
}

function pokeImgs(id) {
  const imgContainer = document.querySelector(".choose-panel__buttons");
  const pokeImg = document.createElement("img");

  pokeImg.src = pokemon.sprites.front_default;
  imgContainer.appendChild(imgContainer);
}

getPokemon();
