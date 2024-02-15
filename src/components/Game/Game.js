import React, { useEffect, useState } from "react";
import { GameLayout } from "./GameLayout";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initionalField = Array(9).fill("");

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(initionalField);

  const handleClickOnField = (id) => {
    if (isDraw || isGameEnded) {
      return;
    }
    const newField = [...field];
    newField[id] = currentPlayer;
    setField(newField);
  };

  const searchWinner = () => {
    let winner;
    WIN_PATTERNS.forEach((pattern) => {
      if (
        field[pattern[0]] === field[pattern[1]] &&
        field[pattern[0]] === field[pattern[2]] &&
        field[pattern[1]] === field[pattern[2]]
      ) {
        winner = field[pattern[0]];
      }
    });
    return winner;
  };
  useEffect(() => {
    const winner = searchWinner();
    if (winner) {
      setIsGameEnded(true);
    } else if (!winner && !field.some((f) => f === "")) {
      setIsDraw(true);
    } else if (!(isGameEnded || isDraw)) {
      setCurrentPlayer((prevState) => (prevState === "X" ? "0" : "X"));
    }
    console.log({ isDraw, isGameEnded, currentPlayer });
  }, [field]);

  const handleRestart = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(initionalField);
  };
  return (
    <GameLayout
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      field={field}
      handleClickOnField={handleClickOnField}
      handleRestart={handleRestart}
    />
  );
};
