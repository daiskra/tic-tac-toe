import styles from "./Field.module.css";

export const FieldLayout = ({ field, handleClickOnField }) => {
  console.log(field);
  return (
    <div className={styles.fieldWrapper}>
      {field.map((cell, index) => (
        <div
          className={styles.field}
          key={index}
          onClick={() => handleClickOnField(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};
