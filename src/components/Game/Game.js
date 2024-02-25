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

const initialField = Array(9).fill("");

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(initialField);
  const [winner, setWinner] = useState(undefined);

  const handleClickOnField = (id) => {
    if (field[id] === "" && !isDraw && !isGameEnded) {
      const newField = [...field];
      newField[id] = currentPlayer;
      setField(newField);
      setCurrentPlayer((prevState) => (prevState === "X" ? "O" : "X"));
    }
  };

  const searchWinner = () => {
    for (let pattern of WIN_PATTERNS) {
      if (
        field[pattern[0]] &&
        field[pattern[0]] === field[pattern[1]] &&
        field[pattern[0]] === field[pattern[2]]
      ) {
        return field[pattern[0]];
      }
    }
  };

  useEffect(() => {
    const newWinner = searchWinner();
    if (newWinner) {
      setIsGameEnded(true);
    }
    if (!newWinner && !field.some((f) => f === "")) {
      setIsDraw(true);
    }
    setWinner(newWinner);
  }, [field]);

  const handleRestart = () => {
    setCurrentPlayer("X");
    setWinner(undefined);
    setIsGameEnded(false);
    setIsDraw(false);
    setField(initialField);
  };
  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      winner={winner}
      isDraw={isDraw}
      field={field}
      handleClickOnField={handleClickOnField}
      handleRestart={handleRestart}
    />
  );
};
