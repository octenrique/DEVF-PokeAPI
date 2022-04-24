"use strict";

// function fetchPokemon(id) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   fetch(`${url}`)
//     .then((res) => res.json())
//     .then((data) => {
//       return showPokemon(data);
//     })
//     .catch((err) => console.log(err));
// }

// const showPokemon = (data) => {
//   let pokeName = data.name;
//   let pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`;
//   let pokeImage = data.sprites["front_default"];
//   const list = {
//     pokeName,
//     pokeAbilities,
//     pokeImage,
//   };
//   console.log(list);
//   // console.log(pokeName);
//   // console.log(pokeAbilities);
//   // console.log(pokeImage);
//   return list;
// };

// let result = fetchPokemon(1);

// console.log(result);

const url = `https://pokeapi.co/api/v2/pokemon/`;
let params = {};

async function fetchPokemon(id) {
  try {
    const response = await fetch(`${url}${id}/`);
    return response.json();
  } catch (err) {
    console.log(new Error("It couldn't be possible to connect to the PokeAPI"));
  }
}

fetchPokemon(19).then((data) => {
  let pokeName = data.name,
    // pokeAbilities = `${data.types[0]["type"]["name"]} & ${data.types[1]["type"]["name"]}`;
    pokeImage = data.sprites["front_default"];
  console.log(pokeName);
  console.log(pokeImage);
  params = {
    pokeName,
    // pokeAbilities,
    // pokeImage,
  };
  return params;
});

console.log(pokeName, pokeImage);

// console.log(fetchPokemon(1));
