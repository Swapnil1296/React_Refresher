import stateImg from "./assets/game-logo.png";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import Logs from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurn, setGameTurn] = useState([]);
  //const [isActivePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurn);
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  const hasDraw = gameTurn.length === 9 && !winner;
  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currActivePlayer) =>
    //   currActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurn((prevTurn) => {
      // let currentPlayer = "X";
      // if (prevTurn.length > 0 && prevTurn[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  };
  const handleRematch = () => {
    setGameTurn([]);
  };
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prePlayer) => {
      return {
        ...prePlayer,
        [symbol]: newName,
      };
    });
  };
  return (
    <>
      <header>
        <img src={stateImg} alt="tic_tac" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              activePlayer={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              name="Player 2"
              symbol="O"
              activePlayer={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRematch} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Logs turns={gameTurn} />
      </main>
    </>
  );
}

export default App;
