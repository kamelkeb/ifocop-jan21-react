import classes from "./Button.module.css";

export const Button = ({ onClick, children }) => {
  return (
    <button className={classes.myButton} onClick={onClick}>
      {children}
    </button>
  );
};
