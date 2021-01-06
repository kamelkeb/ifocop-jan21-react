import React from "react";
import classes from "./Buttons.module.css";
import { Button } from "../Button/Button";
export const Buttons = ({ callback1, callback2, callback3, compteur }) => {
  return (
    <div className={classes.buttons}>
      <Button onClick={callback1}>Agrandir</Button>
      <Button onClick={callback2}>Raptisser</Button>

      <Button onClick={() => callback3(true)}>Afficher</Button>
      <Button onClick={() => callback3(false)}>Cacher</Button>
      <div className={classes.blockPlusMoins}>
        <p>Agir sur le rouge:</p>
        <Button onClick={() => {}}>-</Button>
        <Button onClick={() => {}}>+</Button>
      </div>
      <div className={classes.blockPlusMoins}>
        <p>Agir sur le vert:</p>
        <Button onClick={() => {}}>-</Button>
        <Button onClick={() => {}}>+</Button>
      </div>
      <div className={classes.blockPlusMoins}>
        <p>Agir sur le bleu:</p>

        <Button onClick={() => {}}>-</Button>
        <Button onClick={() => {}}>+</Button>
      </div>
      <div className={classes.blockPlusMoins}>
        <p>Agir sur la luminausité:</p>
        <Button onClick={() => {}}>-</Button>
        <Button onClick={() => {}}>+</Button>
      </div>
    </div>
  );
};
/* Ici on illustre deux façons d'utiliser des callback
qui viennent d'un composant parents : En passant de la
donnée ou sans passer de la donnée*/
