import React, { useState } from "react";
import "./App.css";
import { ColoredSquare } from "./components/ColoredSquare";
import { Header } from "./components/Header/Header";
import { Buttons } from "./components/Buttons/Buttons";
const App = () => {
  const colors = [
    { color: "pink", id: "mon_app_squarerd_li1" },
    { color: "blue", id: "mon_app_squarerd_li2" },
    { color: "green", id: "mon_app_squarerd_li3" },
    { color: "red", id: "mon_app_squarerd_li4" },
  ];
  const [compteur, setCompteur] = useState(100);
  const [visible, setVisible] = useState(true);
  const [red, setRed] = useState(255);
  const [green, setgreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const agrandirHandler = () => setCompteur((oldCompteur) => oldCompteur + 10);
  const raptissirHandler = () => setCompteur((oldCompteur) => oldCompteur - 10);

  const rgbString = "rgb(220,12,0)";

  Array.from(rgbString);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="App">
      <Header></Header>

      <Buttons
        callback1={agrandirHandler}
        callback2={raptissirHandler}
        callback3={setVisible}
        compteur={compteur}
      ></Buttons>
      {visible && <ColoredSquare color={color} side={compteur}></ColoredSquare>}
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
