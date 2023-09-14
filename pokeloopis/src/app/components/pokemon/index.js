<<<<<<< Updated upstream
=======
import "./styles.css";

const fetchedPokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
let pokemonList = await fetchedPokemonList.json();
pokemonList = pokemonList.results;
const randomIndex = Math.round(Math.random() * pokemonList.length);
const pokemon = pokemonList[randomIndex];
const fetchedPokemon = await fetch(pokemon.url);
let pokemoninfo = await fetchedPokemon.json();
let pokemonImg = await pokemoninfo.sprites.front_default

console.log(pokemoninfo);

export default function Pokemon () {
  return (
  <div className="pokeCard">
    <img src ={pokemonImg}></img>
  </div>
  );
}
>>>>>>> Stashed changes
