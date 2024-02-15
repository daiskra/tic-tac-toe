import styles from "./Information.module.css";

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  if (isDraw) {
    return <div>Ничья</div>;
  } else if (isGameEnded) {
    return <div>Победа: {currentPlayer}</div>;
  } else {
    return <div>Ходит: {currentPlayer}</div>;
  }
};
