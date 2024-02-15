import { Field } from "../Field/Field";
import { Information } from "../Information/Information";

export const GameLayout = (props) => {
  const {
    currentPlayer,
    setCurrentPlayer,
    isGameEnded,
    setIsGameEnded,
    isDraw,
    setIsDraw,
    field,
    handleClickOnField,
    handleRestart,
  } = props;

  return (
    <div>
      <Field field={field} handleClickOnField={handleClickOnField} />
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <button disabled={!(isDraw || isGameEnded)} onClick={handleRestart}>
        Начать заново
      </button>
    </div>
  );
};
