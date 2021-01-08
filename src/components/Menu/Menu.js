import classes from "./Menu.module.css";
import { useHistory } from "react-router-dom";

export const Menu = ({ entries, hide }) => {
  const history = useHistory();
  return (
    <div className={classes.menu}>
      <ul>
        {entries.map((e) => (
          <li
            onClick={() => {
              history.push(e.path);
              hide();
            }}
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
