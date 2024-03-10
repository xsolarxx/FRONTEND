import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const createUser = (userData) => {
    // Lógica para crear un nuevo usuario en la base de datos o en algún servicio de autenticación
    console.log('Creando usuario:', userData);
  };

  const updateUser = (userId, updatedUserData) => {
    // Lógica para actualizar los datos de un usuario existente
    console.log('Actualizando usuario:', userId, updatedUserData);
  };

  const deleteUser = (userId) => {
    // Lógica para eliminar un usuario existente
    console.log('Eliminando usuario:', userId);
  };

  const isAdmin = user && user.role === 'admin';

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      createUser,
      updateUser,
      deleteUser,
      isAdmin,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
