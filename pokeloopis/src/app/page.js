import Image from "next/image";
import styles from "./page.module.css";
import Tipo from "./components/tipo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Tipo />
    </main>
  );
}
