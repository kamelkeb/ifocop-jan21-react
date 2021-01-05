import React, { useState } from "react";
import "./App.css";
import { ColoredSquare } from "./components/ColoredSquare";

const App = () => {
  const username = "Kelly";
  const ilFaitBeau = Math.random() < 0.5 ? true : false;

  const message = ilFaitBeau ? (
    <p>Quelle belle journée! Accessoire de la journée: Chapeau!</p>
  ) : (
    <p>Attention au vent! Accessoire de la journée: Parapluie!</p>
  );

  const colors = ["pink", "blue", "green", "red"];
  return (
    <div className="App">
      Ma première app
      <ColoredSquare color="green" side="400px" message={message}>
        <button style={{ width: "80%" }}>Enfant de ColoredSquare</button>
        <ColoredSquare color="red"></ColoredSquare>
      </ColoredSquare>
      <ColoredSquare color="grey" side="300px">
        <ul>
          {colors.map((c) => (
            <li>
              <ColoredSquare color={c}></ColoredSquare>
            </li>
          ))}
        </ul>
      </ColoredSquare>
      <ColoredSquare color="red"></ColoredSquare>
    </div>
  );
};

export default App;

//juste un exemple d'écriture avec appels de fonctions
ColoredSquare({
  color: "green",
  side: "160px",
  message: "Salut!",
  childre: [
    <button style={{ width: "80%" }}>Enfant de ColoredSquare</button>,
    ColoredSquare({
      color: "red",
      children: ColoredSquare({ color: "black" }),
    }),
  ],
});
