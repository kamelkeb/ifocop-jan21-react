import classes from "./Header.module.css";
import React, { useState } from "react";

import { Menu } from "../Menu/Menu";
import { NavLink, Link } from "react-router-dom";

export const Header = ({ username, isLoggedin, logout }) => {
  const [menuVisible, setmenuVisible] = useState(false);
  const prenom = username || "toi";
  return (
    <div className={classes.header}>
      <img
        className={classes.menuIcon}
        src="./assets/menu-outline.svg"
        alt=""
        onClick={() => setmenuVisible((v) => !v)}
      ></img>
      <div>
        <div className={classes.titre}>Ma première app</div>
        <div className={classes.message}>Salut {prenom}!</div>
      </div>
      {isLoggedin ? (
        <img
          className={classes.logoutIcon}
          src="./assets/log-out-outline.svg"
          alt=""
          onClick={logout}
        ></img>
      ) : (
        <Link to="/login">Se connecter</Link>
      )}
      {menuVisible && (
        <Menu
          entries={[
            { title: "Ajusteur de couleurs", path: "/ajustcouleur" },
            { title: "Compteur", path: "" },
            { title: "Log out", path: "" },
          ]}
          hide={() => setmenuVisible(false)}
        ></Menu>
      )}
    </div>
  );
};
