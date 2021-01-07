import React, { useState } from "react";

import classes from "./InputDelta.module.css";

export const InputDelta = ({ value, onDeltaChange }) => {
  const [erreurSaisie, setErreurSaisie] = useState(undefined);

  const errorMessage = (newDeltaColor) => {
    if (newDeltaColor > 255) {
      return "Le nombre doit être inférieur à 256!";
    } else if (newDeltaColor < 0) {
      return "Le nombre doit être supérieur à 0!";
    } else {
      return undefined;
    }
  };

  const inputHandler = (event) => {
    const b = errorMessage(Number(event.target.value));
    setErreurSaisie(b);
    if (!b) {
      onDeltaChange(Number(event.target.value));
    }
  };
  return (
    <div className={classes.inputDelta}>
      <label htmlFor="delta">Entrer le delta voulu:</label>
      <input
        id="delta"
        type="number"
        value={value}
        onChange={inputHandler}
      ></input>
      <br />

      <span style={{ color: "red", fontSize: "0.9em" }}>{erreurSaisie}</span>
    </div>
  );
};
