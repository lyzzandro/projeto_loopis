import styles from "./styles.css";

export default function Tipo({ tipo }) {
  return (
    <>
      <div className="tipo">
        <p>Tipo: Água {tipo}</p>
      </div>
    </>
  );
}
