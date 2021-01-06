import React, { useState } from "react";
import "./App.css";
import { ColoredSquare } from "./components/ColoredSquare";
import { Header } from "./components/Header/Header";

const App = () => {
  const username = "Kelly";
  const ilFaitBeau = Math.random() < 0.5 ? true : false;

  const message = ilFaitBeau
    ? "Quelle belle journée! Accessoire de la journée: Chapeau!"
    : "Attention au vent! Accessoire de la journée: Parapluie!";

  const colors = [
    { color: "pink", id: "mon_app_squarerd_li1" },
    { color: "blue", id: "mon_app_squarerd_li2" },
    { color: "green", id: "mon_app_squarerd_li3" },
    { color: "red", id: "mon_app_squarerd_li4" },
  ];
  return (
    <div className="App">
      <Header username={username}></Header>
      Ma première app
      <ColoredSquare color="green" side="400px" message={message}>
        <button style={{ width: "80%" }}>Enfant de ColoredSquare</button>
        <ColoredSquare color="red"></ColoredSquare>
      </ColoredSquare>
      <ColoredSquare color="grey" side="300px">
        <ul>
          {colors.map((c) => (
            <li key={c.id}>
              <ColoredSquare color={c.color}></ColoredSquare>
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
  children: [
    <button style={{ width: "80%" }}>Enfant de ColoredSquare</button>,
    ColoredSquare({
      color: "red",
      children: ColoredSquare({ color: "black" }),
    }),
  ],
});
