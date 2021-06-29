import React, { useState } from "react";
import { BottomSheet, ListItem } from "react-native-elements";
import { useThemes } from "../hooks/useThemes";

export function ButtonTheme() {
  const { isMenuVisible, SetIsMenuVisible, themes, setCurrentTheme } =
    useThemes();
  const list = [
    {
      theme: "light",
      onPress: () => {
        setCurrentTheme(themes.light), SetIsMenuVisible(false);
      },
    },
    {
      theme: "dracula",
      onPress: () => {
        setCurrentTheme(themes.dracula), SetIsMenuVisible(false);
      },
    },
    {
      theme: "green",
      onPress: () => {
        setCurrentTheme(themes.green), SetIsMenuVisible(false);
      },
    },
    {
      theme: "DarkBlue",
      onPress: () => {
        setCurrentTheme(themes.DarkBlue), SetIsMenuVisible(false);
      },
    },
    {
      theme: "blue",
      onPress: () => {
        setCurrentTheme(themes.blue), SetIsMenuVisible(false);
      },
    },
    {
      theme: "black",
      onPress: () => {
        setCurrentTheme(themes.black), SetIsMenuVisible(false);
      },
    },
    {
      theme: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => SetIsMenuVisible(false),
    },
  ];

  return (
    <BottomSheet
      isVisible={isMenuVisible}
      containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
    >
      {list.map((list, i) => (
        <ListItem
          key={i}
          containerStyle={list.containerStyle}
          onPress={list.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={list.titleStyle}>
              {list.theme}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
}
