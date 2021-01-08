import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { AjusteurCouleur } from "./components/AjusteurCouleur/AjusteurCouleur";

import { LoginForm } from "./components/LoginForm.js/LoginForm";
import { Layout } from "./hocs/Layout/Layout";
import { ProtectedRoute } from "./hocs/ProtectedRoute/ProtectedRoute";
import { UserContext } from "./contexts";

/*
Un context disposera d'un champ Provider qui nous permettra d'injecter à tous ses
composants fils la possibilité de consulté une valeur stockée dans ce context.
MyContext.Provider est un HOC qui prend une props "value" dans laquelle on passe la
data que l'on veut voir disponible dans le contexte.

*/

const App = () => {
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

  const credentialsSubmission = (truc) => {
    setIsLoggedin(true);
    setCredentials(truc);
  };

  const logout = () => {
    setIsLoggedin(false);
    setCredentials({ username: "", password: "" });
  };

  return (
    <UserContext.Provider
      value={{ isLoggedin, username: credentials.username }}
    >
      <BrowserRouter className="App">
        <Layout logout={logout}>
          <Switch>
            <Route path="/" exact>
              <div>HOME</div>
            </Route>

            <Route path="/login" exact>
              {isLoggedin ? (
                <Redirect to="/"></Redirect>
              ) : (
                <LoginForm
                  credentialsSubmission={credentialsSubmission}
                ></LoginForm>
              )}
            </Route>

            <ProtectedRoute path="/ajustcouleur">
              <AjusteurCouleur />
            </ProtectedRoute>
          </Switch>
        </Layout>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
export default App;
