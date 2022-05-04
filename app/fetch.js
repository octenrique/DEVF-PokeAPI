("use strict");

const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon`;
const URL_POKEMON_ABILITY = `https://pokeapi.co/api/v2/ability/`;
const POKE_GRID = document.querySelector(".choose-panel__buttons");
const PREVIOUS = document.querySelector(".choose-panel__previous");
const NEXT = document.querySelector(".choose-panel__next");
const POKE_NAME = document.querySelector("#pokeName");
const BUTTON_SEARCH = document.querySelector("#search-button");

let offset = 1;
let limit = 19;

console.log(POKE_NAME.value);

//* Fetching the API

async function getPokemon(id = 1) {
  try {
    const resGet = await fetch(`${URL_POKEMON}/${id}/`);
    const resDescription = await fetch(`${URL_POKEMON}-species/${id}`);
    const dataGet = await resGet.json();
    const dataDescription = await resDescription.json();
    infoPokemon(dataGet);
    gridPokemons(dataGet);
    descriptionPokemon(dataDescription);
  } catch (err) {
    console.log(new Error("It couldn't be possible to connect to the PokeAPI"));
  }
}

//* Getting the Pokemon info

const infoPokemon = (dataGet) => {
  let pokedexName = document.querySelector(".info__APIValue-name"),
    pokedexHp = document.querySelector(".info__APIValue-hp"),
    pokedexAttack = document.querySelector(".info__APIValue-attack"),
    pokedexDefense = document.querySelector(".info__APIValue-defense"),
    pokedexImg = document.querySelector(".poke-image__image");

  let pokeName = dataGet.name,
    pokeHp = dataGet.stats[0].base_stat,
    pokeAttack = dataGet.stats[1].base_stat,
    pokeDefense = dataGet.stats[2].base_stat,
    pokeImage = dataGet.sprites.front_default;

  pokedexName.innerHTML = `<p><b>${pokeName}</b></p>`;
  pokedexHp.innerHTML = `<p><b>${pokeHp}</b></p>`;
  pokedexAttack.innerHTML = `<p><b>${pokeAttack}</b></p>`;
  pokedexDefense.innerHTML = `<p><b>${pokeDefense}</b></p>`;
  pokedexImg.src = pokeImage;
};

const descriptionPokemon = (dataDescription) => {
  let pokedexDescription = document.querySelector(
    ".screen__description-container"
  );

  let pokeDescription = dataDescription.flavor_text_entries[0].flavor_text;

  pokedexDescription.innerHTML = `<p>${pokeDescription}</p>`;
};

//* Attaching to the grid side

const gridPokemons = (dataGet) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("pokemon-thumbnail");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");
  spriteContainer.classList.add(`${dataGet.id}`);

  const sprite = document.createElement("img");
  sprite.src = dataGet.sprites.front_default;

  spriteContainer.appendChild(sprite);
  imageContainer.appendChild(spriteContainer);
  POKE_GRID.appendChild(imageContainer);
};

//* Filtering section

// BUTTON_SEARCH.onkeydown = filterPokemon();

POKE_NAME.addEventListener("keydown", filterPokemon);
BUTTON_SEARCH.addEventListener("onclick", filterPokemon);

async function filterPokemon() {
  try {
    const resGet = await fetch(
      `${URL_POKEMON}/${POKE_NAME.value.toLocaleLowerCase()}`
    );
    const dataGet = await resGet.json();

    infoPokemon(dataGet);
  } catch (err) {
    console.log(new Error("There isn't such Pokemon. Try again"));
  }
}

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

//* Choosing pokemon from the grid

// IMG_SELECTED.addEventListener(
//   "click",
//   (choosePokemon = () => {
//     const IMG_SELECTED = document.querySelector(".img-container");

//     console.log(IMG_SELECTED);
//   })
// );
