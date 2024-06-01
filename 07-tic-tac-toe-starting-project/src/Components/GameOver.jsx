export default function GameOver({ symbol, restart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {symbol && <p>{symbol}, won! </p>}
      {!symbol && <p>It's a draw.</p>}
      <p>
        <button onClick={restart}>Rematch!</button>
      </p>
    </div>
  );
}
