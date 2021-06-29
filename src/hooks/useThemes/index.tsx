import React, { createContext, ReactNode, useContext, useState } from "react";
import { themes } from "./themes";
interface ThemesContextDTO {
  children: ReactNode;
}

interface IContext {
  currentTheme: any;
  setCurrentTheme: (currentTheme: any) => void;
  themes: any;
}

const ThemesContext = createContext({} as IContext);

export function ThemesContextProvider({ children }: ThemesContextDTO) {
  const [currentTheme, setCurrentTheme] = useState<object>(themes.black);

  return (
    <ThemesContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemesContext.Provider>
  );
}

export function useThemes() {
  const context = useContext(ThemesContext);
  const { currentTheme, setCurrentTheme, themes } = context;
  return { currentTheme, setCurrentTheme, themes };
}
