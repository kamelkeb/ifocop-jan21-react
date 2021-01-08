import React, { useState } from "react";
import { Wrapper } from "../../hocs/Wrapper/Wrapper";

import { Buttons } from "../Buttons/Buttons";
import { ColoredSquare } from "../ColoredSquare/ColoredSquare";
import { InputDelta } from "../InputDelta/InputDelta";

export const AjusteurCouleur = () => {
  const [compteur, setCompteur] = useState(100);
  const [visible, setVisible] = useState(true);
  const [colorObj, setColorObj] = useState({ r: 255, g: 0, b: 0, a: 50 });
  const [deltaColor, setDeltaColor] = useState(10);

  const agrandirHandler = () => setCompteur((oldCompteur) => oldCompteur + 10);
  const raptissirHandler = () => setCompteur((oldCompteur) => oldCompteur - 10);

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
    <Wrapper>
      <InputDelta value={deltaColor} onDeltaChange={setDeltaColor}></InputDelta>

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
    </Wrapper>
  );
};
// Le composant <></> est un raccourci pour <React.Fragment></React.Fragment>
