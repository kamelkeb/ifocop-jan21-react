import React, { useState } from "react";
import classes from "./LoginForm.module.css";

export const LoginForm = ({ credentialsSubmission }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const userOnChangeHandler = (event) => {
    setCredentials((oldCredentials) => {
      return { ...oldCredentials, username: event.target.value };
    });
  };

  const passOnChangeHandler = (event) => {
    setCredentials((oldCredentials) => {
      return { ...oldCredentials, password: event.target.value };
    });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    credentialsSubmission({
      username: credentials.username?.trim(),
      password: credentials.password?.trim(),
    });
  };
  return (
    <div className={classes.loginForm}>
      <form onSubmit={formSubmissionHandler}>
        <label htmlFor="delta">Nom</label>
        <input
          name="username"
          type="text"
          value={credentials.username}
          onChange={userOnChangeHandler}
          required
        ></input>
        <br />
        <label htmlFor="delta">Mot de passe</label>
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={passOnChangeHandler}
          required
        ></input>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};
