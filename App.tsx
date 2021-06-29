import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";

import { ThemesContextProvider } from "./src/hooks/useThemes";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <ThemesContextProvider>
        <Home />
      </ThemesContextProvider>
    </>
  );
}
