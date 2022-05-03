("use strict");

const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/`;
const URL_POKEMON_ABILITY = `https://pokeapi.co/api/v2/ability/`;
const POKE_GRID = document.querySelector(".choose-panel__button");
const PREVIOUS = document.querySelector(".choose-panel__previous");
const NEXT = document.querySelector(".choose-panel__next");

let offset = 1;
let limit = 20;

//* Buttons pagination

// const removeChildNodes = (parent) => {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// };

// PREVIOUS.addEventListener("click", () => {
//   if (offset != 1) {
//     offset -= 19;
//     removeChildNodes(POKE_GRID);
//     getPokemon(offset, limit);
//   }
// });

// NEXT.addEventListener("click", () => {
//   offset += 19;
//   removeChildNodes(POKE_GRID);
//   fetchPokemons(offset, limit);
// });

//* Fetching the API

async function getPokemon(id = 1) {
  try {
    const response = await fetch(`${URL_POKEMON}${id}/`);
    const data = await response.json();

    console.log(data.name);
    // createPokemon(data);
    // createImages(data);
  } catch (err) {
    console.log(new Error("It couldn't be possible to connect to the PokeAPI"));
  }
}

// const limitPokemons = (offset, limit) => {
//   for (let i = offset; i <= offset + limit; i++) {
//     // console.log(i);
//     getPokemon(i);
//   }
// };

//* Creating Pokemon

// const createPokemon = (data) => {
//   let pokedexName = document.querySelector(".header__APIValue-name");
//   let pokedexType = document.querySelector(".header__APIValue-type");
//   let pokedexImg = document.querySelector(".poke-image__image");

//   let pokeName = data.name,
//     pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`,
//     pokeImage = data.sprites["front_default"];

//   pokedexName.innerHTML = `<p><b>${pokeName}</b></p>`;
//   pokedexType.innerHTML = `<p><b>${pokeAbilities}</b></p>`;
//   pokedexImg.src = pokeImage;
// };

getPokemon();
