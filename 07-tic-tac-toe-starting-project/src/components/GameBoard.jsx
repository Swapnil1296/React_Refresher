import React, { useState } from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     // we should not mutate the array directly instead we create a reference for the same.
  //     // mutation can cause unknown errors in the app.
  //     // we can create a reference of array/object using spread operators
  //     setGameBoard((prevGameBoard) => {
  //       const updateBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updateBoard;
  //     });
  //     onSelectSquare();
  //   };
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
