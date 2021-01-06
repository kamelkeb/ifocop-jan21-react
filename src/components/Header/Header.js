import classes from "./Header.module.css";

export const Header = ({ username }) => {
  return (
    <div className={classes.header}>
      <span>Ma première app</span>
      <span>Salut {username}!</span>
    </div>
  );
};
