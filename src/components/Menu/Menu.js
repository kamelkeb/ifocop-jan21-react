import classes from "./Menu.module.css";

export const Menu = ({ entries }) => {
  return (
    <div className={classes.menu}>
      <ul>
        {entries.map((e) => (
          <li
            onClick={() => {}}
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              cursor: "pointer",
              margin: "16px",
            }}
          >
            {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
