import { Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../contexts";

export const ProtectedRoute = ({ children, path }) => {
  /**
   * Pour consommer le context, dans n'importe quel composant placé sous le
   * context provider (en terme de hiérarchie d'arborescence), il suffira d'importer
   * useContext et le contexte en question pour pouvoir récupérer la valeur stockée
   * dans le context.
   */
  const currentUser = useContext(UserContext);
  return (
    <Route path={path}>
      {currentUser.isLoggedin ? children : <Redirect to="/login" />}
    </Route>
  );
};
