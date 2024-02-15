import { FieldLayout } from "./FieldLayout";

export const Field = (props) => {
  const { field, handleClickOnField } = props;
  return <FieldLayout field={field} handleClickOnField={handleClickOnField} />;
};
