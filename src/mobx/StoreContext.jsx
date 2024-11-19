import { createContext, useContext } from "react";
import { usuarioStore } from "./usuarioStore";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ usuarioStore }}>
    {children}
  </StoreContext.Provider>
);

export const useStoreContext = () => {
  const context = useContext(StoreContext);

  if (!context) {
    return new Error("Contexto não definido");
  }

  return context;
};
