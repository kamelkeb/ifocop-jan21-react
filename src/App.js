import React, { useEffect, useState } from "react";
import "./App.css";
import { ColoredSquare } from "./components/ColoredSquare";
import { Header } from "./components/Header/Header";
import { Buttons } from "./components/Buttons/Buttons";
import { InputDelta } from "./components/InputDelta/InputDelta";
import { LoginForm } from "./components/LoginForm.js/LoginForm";
const App = () => {
  const [compteur, setCompteur] = useState(100);
  const [visible, setVisible] = useState(true);
  const [colorObj, setColorObj] = useState({ r: 255, g: 0, b: 0, a: 50 });
  const [deltaColor, setDeltaColor] = useState(10);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    document.title = "Hello " + credentials.username;
    console.log(`exécution de la fonction passée à useEffect lors du premier rendu
    et à chaque fois qu'une
    des dépendances change de valeur`);
    return () => {
      console.log("exécuté à la mort (démontage du DOM) du composant");
      // On mettra ici des traitement de nettoyage
      // fermeture de connexion, démobiliser une ressource
    };
  }, [credentials]);
  // Remarque: si j'avais voulu que l'effet s'exécute à chaque rendu, il aurait suffit
  // de ne pas passer de tableau en deuxième argument.
  // Et si j'avais voulu une exécution seulement lors du premier rendu, alors
  // il aurait suffit de passer un tableau vide en scond argument à useEffect.

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
  const credentialsSubmission = (truc) => {
    setIsLoggedin(true);
    setCredentials(truc);
  };

  const logout = () => {
    setIsLoggedin(false);
    setCredentials({ username: "", password: "" });
  };

  return (
    <div className="App">
      <Header
        username={credentials.username}
        isLoggedin={isLoggedin}
        logout={logout}
      ></Header>
      <LoginForm credentialsSubmission={credentialsSubmission}></LoginForm>
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
    </div>
  );
};
export default App;
