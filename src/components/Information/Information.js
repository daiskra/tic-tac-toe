import { InformationLayout } from "./InformationLayout";

export const Information = (props) => {
  const { currentPlayer, isGameEnded, isDraw } = props;
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};
