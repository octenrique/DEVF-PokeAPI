("use strict");

const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/`;
const URL_POKEMON_ABILITY = `https://pokeapi.co/api/v2/ability/`;
const POKE_GRID = document.querySelector(".choose-panel__buttons");
const PREVIOUS = document.querySelector(".choose-panel__previous");
const NEXT = document.querySelector(".choose-panel__next");

let offset = 1;
let limit = 19;

//* Fetching the API

async function getPokemon(id = 1) {
  try {
    const response = await fetch(`${URL_POKEMON}${id}/`);
    const data = await response.json();

    gridPokemons(data);
    createPokemon(data);
  } catch (err) {
    console.log(new Error("It couldn't be possible to connect to the PokeAPI"));
  }
}

//* Creating Pokemon

const createPokemon = (data) => {
  let pokedexName = document.querySelector(".header__APIValue-name"),
    pokedexType = document.querySelector(".header__APIValue-type"),
    pokedexImg = document.querySelector(".poke-image__image");

  let pokeName = data.name,
    pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`,
    pokeImage = data.sprites.front_default;

  pokedexName.innerHTML = `<p><b>${pokeName}</b></p>`;
  pokedexType.innerHTML = `<p><b>${pokeAbilities}</b></p>`;
  pokedexImg.src = pokeImage;
};

//* Attaching to the grid side

const gridPokemons = (data) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("pokemon-thumbnail");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = data.sprites.front_default;

  spriteContainer.appendChild(sprite);
  imageContainer.appendChild(spriteContainer);
  POKE_GRID.appendChild(imageContainer);
};

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
    limitPokemons(offset, limit);
  }
});

NEXT.addEventListener("click", () => {
  offset += 19;
  removeChildNodes(POKE_GRID);
  limitPokemons(offset, limit);
});

const limitPokemons = (offset, limit) => {
  for (let i = offset; i <= offset + limit; i++) {
    getPokemon(i);
  }
};
limitPokemons(offset, limit);
