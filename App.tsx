import { SafeAreaProvider } from "react-native-safe-area-context";
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
      <SafeAreaProvider>
        <ThemesContextProvider>
          <Home />
        </ThemesContextProvider>
      </SafeAreaProvider>
    </>
  );
}
