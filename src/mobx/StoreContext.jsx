import { createContext } from "react";
import { usuarioStore } from "./usuarioStore";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  <StoreContext.Provider value={{ usuarioStore }}>
    {children}
  </StoreContext.Provider>;
};
