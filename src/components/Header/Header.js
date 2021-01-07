import classes from "./Header.module.css";

export const Header = ({ username }) => {
  const prenom = username || "toi";
  return (
    <div className={classes.header}>
      <span>Ma première app</span>
      <span>Salut {prenom}!</span>
    </div>
  );
};
