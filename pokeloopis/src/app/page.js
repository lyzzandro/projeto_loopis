import Image from "next/image";
import styles from "./page.module.css";
// import Tipo from "./components/tipo";

const PokeApiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

async function getRandomPokemon() {
  const fetchedPokemonList = await fetch(PokeApiUrl);

  let pokemonList = await fetchedPokemonList.json();
  pokemonList = pokemonList.results;

  const randomIndex = Math.round(Math.random() * pokemonList.length);
  const RandomPokemon = pokemonList[randomIndex];

  const fetchedPokemon = await fetch(RandomPokemon.url);
  return await fetchedPokemon.json();
}

let info = await getRandomPokemon();
console.log(info.name);
console.log(info.types[0].type.name);
console.log(info.sprites.front_default);

export default function Home() {
  return (
    <main className={styles.main}>
    </main>
  );
}
