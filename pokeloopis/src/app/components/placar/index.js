import "./styles.css";

export default function Placar({ score, highscore }) {
  return (
    <div className="score-container">
      <h3 className="score">Acertos atuais: { score }</h3>
      <h3 className="highscore">Recorde de acertos: { highscore }</h3>
    </div>
  );
}
