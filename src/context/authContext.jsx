// importaciones { createContext, userContext, useMemo, useState } from "react"

// 1. creamos el contexto y lo guardamos en una variable

// 2. la funcion que nos provee del context

// export const AuthContextProvider = ({children}) => {
// el estado del usuario authenticado

// const login = (data =>)
// const logout = ()

import { createContext, useContext, useMemo, useState } from "react";

// ) crear el contexto y guardarlo en una variable
const AuthContext = createContext();

// la funcion  que nos provee del contexto

export const AuthContextProvider = ({ children }) => {
  // 1) El estado del user autenticado

  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  });

  // 2) Funciones que utlizamos en el contexto

  const login = (data) => {
    // esta data viene en string
    localStorage.setItem("user", data);
    const parseUser = JSON.parse(data);
    setUser(parseUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // 3) Memorizar los valores que vamos a proveer

  const value = useMemo(() => ({ user, setUser, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//! 3) CUSTOM HOOK PARA UTLIZAR EL CONTEXTO DE FORMA MAS SENCILLA

export const useAuth = () => useContext(AuthContext);
