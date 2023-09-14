import "./styles.css";

const fetchedPokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
let pokemonList = await fetchedPokemonList.json();
pokemonList = pokemonList.results;
const randomIndex = Math.round(Math.random() * pokemonList.length);
const pokemon = pokemonList[randomIndex];
const fetchedPokemon = await fetch(pokemon.url);
let pokemoninfo = await fetchedPokemon.json();

console.log(pokemoninfo);

export default function Pokemon () {
  return (
  <div className="pokeCard">
    <h1></h1>
    <img src ={pokemon.sprites.front_default}></img>
  </div>
  );
}