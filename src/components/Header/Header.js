import classes from "./Header.module.css";

export const Header = ({ username }) => {
  return <div className={classes.header}>Salut {username}!</div>;
};
