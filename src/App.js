import React, { useState } from "react";
import "./App.css";
import { ColoredSquare } from "./components/ColoredSquare";
import { Header } from "./components/Header/Header";

const App = () => {
  const colors = [
    { color: "pink", id: "mon_app_squarerd_li1" },
    { color: "blue", id: "mon_app_squarerd_li2" },
    { color: "green", id: "mon_app_squarerd_li3" },
    { color: "red", id: "mon_app_squarerd_li4" },
  ];
  const tableau = useState("Kelly");
  const username = tableau[0];
  const setUsername = tableau[1];

  const [compteur, setCompteur] = useState(100);
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <Header username={username}></Header>
      Ma première app
      <div>
        <button onClick={() => setCompteur(compteur + 10)}>Agrandir</button>
        <button onClick={() => setCompteur(compteur - 10)}>Raptisser</button>
        La taille est: {compteur}
      </div>
      <div>
        <button onClick={() => setVisible(true)}>Rendre visible</button>
        <button onClick={() => setVisible(false)}>Cacher</button>
      </div>
      {visible && <ColoredSquare color="red" side={compteur}></ColoredSquare>}
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
