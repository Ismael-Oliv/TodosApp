import { StyleSheet } from "react-native";
import {
  headerContainer,
  headerTextContainer,
  taskHeaderContainer,
  taskButton,
  taskMarker,
  taskButtonDone,
  taskMarkerDone,
  taskTextDone,
  inputContainer,
  input,
  inputIOSShadow,
  inputAndroidShadow,
  inputAddButton,
  taskText,
} from "./structure";

const light = {
  mode: { backgroundColor: "#FFF" },
  header: {
    ...headerContainer,
    backgroundColor: "#273FAD",
  },
  headerText: {
    ...headerTextContainer,
    color: "#FFF",
  },
  taskHeader: {
    ...taskHeaderContainer,
    color: "#3D3D4D",
  },
  taskButton: {
    ...taskButton,
  },
  taskMarker: {
    ...taskMarker,
    borderColor: "#3D3D4D",
  },
  taskText: {
    ...taskText,
    color: "#3D3D4D",
  },
  taskButtonDone: {
    ...taskButtonDone,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
  },
  taskMarkerDone: {
    ...taskMarkerDone,
    backgroundColor: "#273FAD",
  },
  taskTextDone: {
    ...taskTextDone,
    color: "#A09CB1",
  },
  inputContainer: {
    ...inputContainer,
    backgroundColor: "#F5F4F8",
  },
  input: {
    ...input,
    backgroundColor: "#F5F4F8",
    color: "#3D3D4D",
  },
  inputPlaceHolder: "#E1E1E6",
  inputIOSShadow: {
    ...inputIOSShadow,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    ...inputAndroidShadow,
  },
  inputAddButton: {
    ...inputAddButton,
    backgroundColor: "#3FAD27",
  },
};

const dracula = {
  mode: { backgroundColor: "#191622" },
  header: {
    ...headerContainer,
    backgroundColor: "#483C67",
  },
  headerText: {
    ...headerTextContainer,
    color: "#E1E1E6",
  },
  taskHeader: {
    ...taskHeaderContainer,
    color: "#FF79C6",
  },
  taskButton: {
    ...taskButton,
  },
  taskMarker: {
    ...taskMarker,
    borderColor: "#FF79C6",
  },
  taskText: {
    ...taskText,
    color: "#FF79C6",
  },
  taskButtonDone: {
    ...taskButtonDone,
    backgroundColor: "#302032",
  },
  taskMarkerDone: {
    ...taskMarkerDone,
    backgroundColor: "#FF79C6",
  },
  taskTextDone: {
    ...taskTextDone,
    color: "#E1E1E6",
  },
  inputContainer: {
    ...inputContainer,
    backgroundColor: "#34313D",
  },
  input: {
    ...input,
    backgroundColor: "#34313D",
    color: "#E1E1E6",
  },
  inputPlaceHolder: "#E1E1E6",
  inputIOSShadow: {
    ...inputIOSShadow,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    ...inputAndroidShadow,
  },
  inputAddButton: {
    ...inputAddButton,
    backgroundColor: "#988BC7",
  },
};

const green = {
  mode: { backgroundColor: "#191622" },
  header: {
    ...headerContainer,
    backgroundColor: "#483C67",
  },
  headerText: {
    ...headerTextContainer,
    color: "#E1E1E6",
  },
  taskHeader: {
    ...taskHeaderContainer,
    color: "#67E480",
  },
  taskButton: {
    ...taskButton,
  },
  taskMarker: {
    ...taskMarker,
    borderColor: "#67E480",
  },
  taskText: {
    ...taskText,
    color: "#67E480",
  },
  taskButtonDone: {
    ...taskButtonDone,
    backgroundColor: "#1D1B28",
  },
  taskMarkerDone: {
    ...taskMarkerDone,
    backgroundColor: "#67E480",
  },
  taskTextDone: {
    ...taskTextDone,
    color: "#E1E1E6",
  },
  inputContainer: {
    ...inputContainer,
    backgroundColor: "#34313D",
  },
  input: {
    ...input,
    backgroundColor: "#34313D",
    color: "#E1E1E6",
  },
  inputPlaceHolder: "#E1E1E6",
  inputIOSShadow: {
    ...inputIOSShadow,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    ...inputAndroidShadow,
  },
  inputAddButton: {
    ...inputAddButton,
    backgroundColor: "#988BC7",
  },
};

const DarkBlue = {
  mode: { backgroundColor: "#10101E" },
  header: {
    ...headerContainer,
    backgroundColor: "#191932",
  },
  headerText: {
    ...headerTextContainer,
    color: "#E1E1E6",
  },
  taskHeader: {
    ...taskHeaderContainer,
    color: "#565BFF",
  },
  taskButton: {
    ...taskButton,
  },
  taskMarker: {
    ...taskMarker,
    borderColor: "#565BFF",
  },
  taskText: {
    ...taskText,
    color: "#565BFF",
  },
  taskButtonDone: {
    ...taskButtonDone,
    backgroundColor: "#1D1B28",
  },
  taskMarkerDone: {
    ...taskMarkerDone,
    backgroundColor: "#565BFF",
  },
  taskTextDone: {
    ...taskTextDone,
    color: "#E1E1E6",
  },
  inputContainer: {
    ...inputContainer,
    backgroundColor: "#34313D",
  },
  input: {
    ...input,
    backgroundColor: "#212136",
    color: "#E1E1E6",
  },
  inputPlaceHolder: "#E1E1E6",
  inputIOSShadow: {
    ...inputIOSShadow,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    ...inputAndroidShadow,
  },
  inputAddButton: {
    ...inputAddButton,
    backgroundColor: "#565BFF",
  },
};

const blue = {
  mode: { backgroundColor: "#191D3A" },
  header: {
    ...headerContainer,
    backgroundColor: "#282B5A",
  },
  headerText: {
    ...headerTextContainer,
    color: "#E1E1E6",
  },
  taskHeader: {
    ...taskHeaderContainer,
    color: "#E1E1E6",
  },
  taskButton: {
    ...taskButton,
  },
  taskMarker: {
    ...taskMarker,
    borderColor: "#9347CA",
  },
  taskText: {
    ...taskText,
    color: "#E1E1E6",
  },
  taskButtonDone: {
    ...taskButtonDone,
    backgroundColor: "#2D2B54",
  },
  taskMarkerDone: {
    ...taskMarkerDone,
    backgroundColor: "#9347CA",
  },
  taskTextDone: {
    ...taskTextDone,
    color: "#9998AC",
  },
  inputContainer: {
    ...inputContainer,
    backgroundColor: "#413A6F",
  },
  input: {
    ...input,
    backgroundColor: "#413A6F",
    color: "#E1E1E6",
  },
  inputPlaceHolder: "#E1E1E6",
  inputIOSShadow: {
    ...inputIOSShadow,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    ...inputAndroidShadow,
  },
  inputAddButton: {
    ...inputAddButton,
    backgroundColor: "#9347CA",
  },
};

const black = {
  mode: { backgroundColor: "#262626" },
  header: {
    ...headerContainer,
    backgroundColor: "#3E3E3E",
  },
  headerText: {
    ...headerTextContainer,
    color: "#E1E1E6",
  },
  taskHeader: {
    ...taskHeaderContainer,
    color: "#BF4AD4",
  },
  taskButton: {
    ...taskButton,
  },
  taskMarker: {
    ...taskMarker,
    borderColor: "#12A952",
  },
  taskText: {
    ...taskText,
    color: "#E1E1E6",
  },
  taskButtonDone: {
    ...taskButtonDone,
    backgroundColor: "#262626",
  },
  taskMarkerDone: {
    ...taskMarkerDone,
    backgroundColor: "#12A952",
  },
  taskTextDone: {
    ...taskTextDone,
    color: "#E1E1E6",
  },
  inputContainer: {
    ...inputContainer,
    backgroundColor: "#303030",
  },
  input: {
    ...input,
    backgroundColor: "#3E3E3E",
    color: "#E1E1E6",
  },
  inputPlaceHolder: "#E1E1E6",
  inputIOSShadow: {
    ...inputIOSShadow,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    ...inputAndroidShadow,
  },
  inputAddButton: {
    ...inputAddButton,
    backgroundColor: "#181818",
  },
};

export const themes = {
  dracula,
  light,
  green,
  DarkBlue,
  blue,
  black,
};
