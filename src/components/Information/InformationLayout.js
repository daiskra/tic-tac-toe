import styles from "./Information.module.css";

export const InformationLayout = ({ currentPlayer, isDraw, winner }) => {
  if (isDraw) {
    return <div>Ничья</div>;
  } else if (winner) {
    return <div>Победа: {winner}</div>;
  } else {
    return <div>Ходит: {currentPlayer}</div>;
  }
};
