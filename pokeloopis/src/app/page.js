import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon/index"

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Pokeloopis</p>
      <Pokemon/>
    </main>
  );
}
