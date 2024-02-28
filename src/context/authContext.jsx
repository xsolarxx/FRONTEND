import { all } from "axios";
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  });

  const [deleteUser, setDeleteUser] = useState(false);

  const [allUser, setAllUser] = useState({
    data: {
      confirmationCode: "",
      user: {
        password: "",
        email: "",
      },
    },
  });

  //! -----------------------------------------------------------------------
  //? -------- PUENTE PARA CUANDO TENGAMOS PROBLEMAS DE ASYNCRONIA ----------
  //! -----------------------------------------------------------------------

  const bridgeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");

        break;

      default:
        break;
    }
  };

  const login = (data) => {
    localStorage.setItem("user", data);
    const parseUser = JSON.parse(data);
    setUser(parseUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      allUser,
      setAllUser,
      bridgeData,
      deleteUser,
      setDeleteUser,
    }),
    [user, allUser, deleteUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

