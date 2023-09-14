import inputStyle from "./styles.css";

console.log(pokemoninfo);

export default function Input () {
  return (
  <div style={inputStyle.div}>
    <input style={inputStyle.input} type="text"></input>
  </div>
  );
}