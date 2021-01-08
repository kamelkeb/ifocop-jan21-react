import { Header } from "../../components/Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";
import { UserContext } from "../../contexts";
import React, { useContext } from "react";

export const Layout = ({ children, logout }) => {
  const currentUser = useContext(UserContext);
  const { username, isLoggedin } = currentUser;
  return (
    <Wrapper>
      <Header
        username={username}
        isLoggedin={isLoggedin}
        logout={logout}
      ></Header>
      {children}
    </Wrapper>
  );
};
