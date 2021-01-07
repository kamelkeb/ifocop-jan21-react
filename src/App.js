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
  const [colorObj, setColorObj] = useState({ r: 255, g: 0, b: 0, a: 50 });

  const agrandirHandler = () => setCompteur((oldCompteur) => oldCompteur + 10);
  const raptissirHandler = () => setCompteur((oldCompteur) => oldCompteur - 10);

  const deltaColor = 10;

  const addWithinLimits = (c, d) => Math.min(255, Math.max(0, c + d));
  // autre version, moins lisible
  const addWithinLimits2 = (c, d) =>
    c + d > 255 ? 255 : c + d < 0 ? 0 : c + d;

  const affectSpecificField = (setter, field, delta) => {
    setter((colorObj) => {
      return { ...colorObj, [field]: addWithinLimits(colorObj[field], delta) };
    });
  };
  const augmenterR = () => affectSpecificField(setColorObj, "r", deltaColor);
  const diminuerR = () => affectSpecificField(setColorObj, "r", -deltaColor);

  const augmenterG = () => affectSpecificField(setColorObj, "g", deltaColor);
  const diminuerG = () => affectSpecificField(setColorObj, "g", -deltaColor);

  const augmenterB = () => affectSpecificField(setColorObj, "b", deltaColor);
  const diminuerB = () => affectSpecificField(setColorObj, "b", -deltaColor);

  const agmenterLumi = () => {
    augmenterR();
    augmenterG();
    augmenterB();
  };

  const diminuerLumi = () => {
    diminuerR();
    diminuerG();
    diminuerB();
  };

  const colorActions = {
    augmenterR,
    diminuerR,
    augmenterG,
    diminuerG,
    augmenterB,
    diminuerB,
    agmenterLumi,
    diminuerLumi,
  };
  return (
    <div className="App">
      <Header></Header>

      <Buttons
        callback1={agrandirHandler}
        callback2={raptissirHandler}
        callback3={setVisible}
        {...colorActions}
        compteur={compteur}
      ></Buttons>
      {visible && (
        <ColoredSquare
          color={`rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`}
          side={compteur}
        ></ColoredSquare>
      )}
    </div>
  );
};
export default App;
