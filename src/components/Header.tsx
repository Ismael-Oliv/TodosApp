import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useThemes } from "../hooks/useThemes";

export function Header() {
  const { currentTheme, setCurrentTheme, themes } = useThemes();

  return (
    <View style={currentTheme.header}>
      <Text style={currentTheme.headerText}>to.</Text>
      <Text
        style={[currentTheme.headerText, { fontFamily: "Poppins-SemiBold" }]}
      >
        do
      </Text>
      <TouchableOpacity
        onPress={() => {
          setCurrentTheme(themes.blue);
        }}
      >
        <Text>Tema</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
