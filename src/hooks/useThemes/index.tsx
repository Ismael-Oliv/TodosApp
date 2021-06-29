import React, { createContext, ReactNode, useContext, useState } from "react";
import { themes } from "./themes";
interface ThemesContextDTO {
  children: ReactNode;
}

interface IContext {
  currentTheme: any;
  setCurrentTheme: (currentTheme: any) => void;
  SetIsMenuVisible: (valeu: boolean) => void;
  themes: any;
  isMenuVisible: boolean;
}

const ThemesContext = createContext({} as IContext);

export function ThemesContextProvider({ children }: ThemesContextDTO) {
  const [currentTheme, setCurrentTheme] = useState<object>(themes.black);
  const [isMenuVisible, SetIsMenuVisible] = useState(false);

  return (
    <ThemesContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        themes,
        isMenuVisible,
        SetIsMenuVisible,
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
}

export function useThemes() {
  const context = useContext(ThemesContext);
  const {
    currentTheme,
    setCurrentTheme,
    themes,
    isMenuVisible,
    SetIsMenuVisible,
  } = context;
  return {
    currentTheme,
    setCurrentTheme,
    themes,
    isMenuVisible,
    SetIsMenuVisible,
  };
}
