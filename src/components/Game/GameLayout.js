import { Field } from "../Field/Field";
import { Information } from "../Information/Information";

export const GameLayout = (props) => {
  const {
    currentPlayer,
    isGameEnded,
    isDraw,
    field,
    handleClickOnField,
    handleRestart,
    winner,
  } = props;

  return (
    <div>
      <Field field={field} handleClickOnField={handleClickOnField} />
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        winner={winner}
      />
      <button disabled={!(isDraw || isGameEnded)} onClick={handleRestart}>
        Начать заново
      </button>
    </div>
  );
};
